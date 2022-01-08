import { HttpService, Injectable } from '@nestjs/common';
import { BigNumber } from '@ethersproject/bignumber';
import { Interface } from '@ethersproject/abi';
import { hexStripZeros, hexZeroPad } from '@ethersproject/bytes';
import {
  RPC_URL,
  ERC20_ABI,
  STAKING_REWARDS_ABI,
  PAIR_ABI,
  RADI_ADDRESS,
  WAVAX_ADDRESS,
  WAVAX_RADI_ADDRESS,
} from '../utils/constants';

@Injectable()
export class AprService {
  constructor(private httpService: HttpService) {}
  private chainId: number;

  setChainId(chainId: number) {
    this.chainId = chainId;
  }

  normalizeAddress(address: string) {
    return hexZeroPad(hexStripZeros(address), 20);
  }

  async getStakingTokenAddress(address: string) {
    const {
      data: { result },
    } = await this.call(STAKING_REWARDS_ABI, address, 'stakingToken', []);
    return this.normalizeAddress(result);
  }

  async getRewardRate(address: string) {
    const {
      data: { result },
    } = await this.call(STAKING_REWARDS_ABI, address, 'rewardRate', []);

    return BigNumber.from(result);
  }

  getPNGBalance(address: string) {
    return this.getBalance(RADI_ADDRESS[this.chainId], address);
  }

  async getTotalSupply(address: string) {
    const {
      data: { result },
    } = await this.call(ERC20_ABI, address, 'totalSupply', []);

    return BigNumber.from(result);
  }

  async getPoolTokens(address: string) {
    const [token0, token1] = await Promise.all([
      this.call(PAIR_ABI, address, 'token0', []),
      this.call(PAIR_ABI, address, 'token1', []),
    ]);

    return [
      this.normalizeAddress(token0.data.result),
      this.normalizeAddress(token1.data.result),
    ];
  }

  async getBalance(erc20: string, address: string) {
    const {
      data: { result },
    } = await this.call(ERC20_ABI, erc20, 'balanceOf', [address]);

    return BigNumber.from(result);
  }

  async getApr(stakingAddress: string) {
    // Address of token to stake
    const stakingTokenAddress = await this.getStakingTokenAddress(
      stakingAddress,
    );

    // How much xPARTY is staked
    const poolTokenBalance = await this.getBalance(
      stakingTokenAddress,
      stakingAddress,
    );

    // Total xPARTY supply
    const poolTokenSupply = await this.getTotalSupply(stakingTokenAddress);

    // Get the two token addresses in the pool
    const [token0, token1] = await this.getPoolTokens(stakingTokenAddress);

    // Get how much AVAX and PARTY are in the AVAX-PARTY pool
    const [pooledAVAX, pooledPARTY] = await Promise.all([
      await this.getBalance(
        WAVAX_ADDRESS[this.chainId],
        WAVAX_RADI_ADDRESS[this.chainId],
      ),
      await this.getBalance(
        RADI_ADDRESS[this.chainId],
        WAVAX_RADI_ADDRESS[this.chainId],
      ),
    ]);

    if (poolTokenSupply.toString() === '0' || pooledPARTY.toString() === '0') {
      return '0';
    }

    const stakedAVAX = [token0.toLowerCase(), token1.toLowerCase()].includes(
      WAVAX_ADDRESS[this.chainId]?.toLowerCase(),
    )
      ? (
          await this.getBalance(
            WAVAX_ADDRESS[this.chainId],
            stakingTokenAddress,
          )
        )
          // Other side of pool has equal value
          .mul(2)
          // Not all xPARTY is staked
          .mul(poolTokenBalance)
          .div(poolTokenSupply)
      : (
          await this.getBalance(
            RADI_ADDRESS[this.chainId],
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

    return (
      (await this.getRewardRate(stakingAddress))
        // Reward rate is per second
        .mul(60 * 60 * 24 * 7 * 52)
        // Convert to AVAX
        .mul(pooledAVAX)
        .div(pooledPARTY)
        // Percentage
        .mul(100)
        // Divide by amount staked to get APR
        .div(stakedAVAX)
    );
  }

  call(
    abi: any[],
    toAddress: string,
    functionName: string,
    functionData: any[],
  ) {
    const iface = new Interface(abi);

    return this.httpService
      .post(RPC_URL[this.chainId], {
        id: 1,
        jsonrpc: '2.0',
        method: 'eth_call',
        params: [
          {
            to: toAddress,
            data: iface.encodeFunctionData(functionName, functionData),
          },
          'latest',
        ],
      })
      .toPromise();
  }
}
