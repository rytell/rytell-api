import { Controller, Get, Param } from '@nestjs/common';

import {
  STAKING_ADDRESSES,
  WAVAX_ADDRESS,
  WAVAX_PARTY_ADDRESS,
  PARTY_ADDRESS,
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

    // Address of token to stake
    const stakingTokenAddress = await this.aprService.getStakingTokenAddress(
      stakingAddress,
    );

    // How much xPARTY is staked
    const poolTokenBalance = await this.aprService.getBalance(
      stakingTokenAddress,
      stakingAddress,
    );

    // Total xPARTY supply
    const poolTokenSupply = await this.aprService.getTotalSupply(
      stakingTokenAddress,
    );

    // Get the two token addresses in the pool
    const [token0, token1] = await this.aprService.getPoolTokens(
      stakingTokenAddress,
    );

    // Get how much AVAX and PARTY are in the AVAX-PARTY pool
    const [pooledAVAX, pooledPARTY] = await Promise.all([
      await this.aprService.getBalance(
        WAVAX_ADDRESS[chainId],
        WAVAX_PARTY_ADDRESS[chainId],
      ),
      await this.aprService.getBalance(
        PARTY_ADDRESS[chainId],
        WAVAX_PARTY_ADDRESS[chainId],
      ),
    ]);

    if (poolTokenSupply.toString() === '0' || pooledPARTY.toString() === '0') {
      return '0';
    }

    const stakedAVAX = [token0.toLowerCase(), token1.toLowerCase()].includes(
      WAVAX_ADDRESS[chainId]?.toLowerCase(),
    )
      ? (
          await this.aprService.getBalance(
            WAVAX_ADDRESS[chainId],
            stakingTokenAddress,
          )
        )
          // Other side of pool has equal value
          .mul(2)
          // Not all xPARTY is staked
          .mul(poolTokenBalance)
          .div(poolTokenSupply)
      : (
          await this.aprService.getBalance(
            PARTY_ADDRESS[chainId],
            stakingTokenAddress,
          )
        )
          // Other side of pool has equal value
          .mul(2)
          // Convert to AVAX
          .mul(pooledAVAX)
          .div(pooledPARTY)
          // Not all xPARTY is staked
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
      .div(pooledPARTY)
      // Percentage
      .mul(100)
      // Divide by amount staked to get APR
      .div(stakedAVAX);
    return rewardRate.toString();
  }
}
