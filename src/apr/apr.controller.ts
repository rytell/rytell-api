import { Controller, Get, Param } from '@nestjs/common';

import {
  STAKING_ADDRESSES,
  WAVAX_ADDRESS,
  WAVAX_YAY_ADDRESS,
  YAY_ADDRESS,
} from 'src/utils/constants';
import { AprService } from './apr.service';

@Controller('apr')
export class AprController {
  constructor(private readonly aprService: AprService) {}

  @Get(':address/:chainId')
  async getApr(@Param() params): Promise<string> {
    const { address: stakingAddress, chainId } = params;

    if (!STAKING_ADDRESSES[chainId].includes(stakingAddress)) {
      return;
    }

    this.aprService.setChainId(chainId);

    const stakingTokenAddress = await this.aprService.getStakingTokenAddress(
      stakingAddress,
    );

    // How much xYAY is staked
    const poolTokenBalance = await this.aprService.getBalance(
      stakingTokenAddress,
      stakingAddress,
    );

    // Total xYAY supply
    const poolTokenSupply = await this.aprService.getTotalSupply(
      stakingTokenAddress,
    );

    // Get the two token addresses in the pool
    const [token0, token1] = await this.aprService.getPoolTokens(
      stakingTokenAddress,
    );

    // Get how much AVAX and YAY are in the AVAX-YAY pool
    const [pooledAVAX, pooledYAY] = await Promise.all([
      await this.aprService.getBalance(
        WAVAX_ADDRESS[chainId],
        WAVAX_YAY_ADDRESS[chainId],
      ),
      await this.aprService.getBalance(
        YAY_ADDRESS[chainId],
        WAVAX_YAY_ADDRESS[chainId],
      ),
    ]);
    if (poolTokenSupply.toString() === '0' || pooledYAY.toString() === '0') {
      return '0';
    }

    const stakedAVAX = [token0, token1].includes(WAVAX_ADDRESS[chainId])
      ? (
          await this.aprService.getBalance(
            WAVAX_ADDRESS[chainId],
            stakingAddress,
          )
        )
          // Other side of pool has equal value
          .mul(2)
          // Not all xYAY is staked
          .mul(poolTokenBalance)
          .div(poolTokenSupply)
      : (await this.aprService.getBalance(YAY_ADDRESS[chainId], stakingAddress))
          // Other side of pool has equal value
          .mul(2)
          // Convert to AVAX
          .mul(pooledAVAX)
          .div(pooledYAY)
          // Not all xYAY is staked
          .mul(poolTokenBalance)
          .div(poolTokenSupply);

    if (stakedAVAX.toString() === '0') {
      return stakedAVAX.toString();
    }

    const rewardRate = (await this.aprService.getRewardRate(stakingAddress))
      // Reward rate is per second
      .mul(60 * 60 * 24 * 7 * 52)
      // Convert to AVAX
      .mul(pooledAVAX)
      .div(pooledYAY)
      // Percentage
      .mul(100)
      // Divide by amount staked to get APR
      .div(stakedAVAX);
    return rewardRate.toString();
  }
}
