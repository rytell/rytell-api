import { HttpService, Injectable } from '@nestjs/common';
import { BigNumber } from '@ethersproject/bignumber';
import { Interface } from '@ethersproject/abi';
import { hexStripZeros, hexZeroPad } from '@ethersproject/bytes';
import { RPC_URL, ERC20_ABI, RADI_ADDRESS } from '../utils/constants';
import { abi as STAKING_REWARDS_ABI } from '@rytell/liquidity-pools/artifacts/contracts/StakingRewards.sol/StakingRewards.json';
import { abi as PAIR_ABI } from '@rytell/exchange-contracts/artifacts/contracts/core/RytellPair.sol/RytellPair.json';
import { request } from 'graphql-request';
import {
  getPairPrices,
  graphUrl,
} from '../rytellswap/graphql/queries';
@Injectable()
export class RadiService {
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

  getRADIBalance(address: string) {
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

  async getUsdcValue(quantity: number){
    const { pair: radiWavax } = await request(graphUrl, getPairPrices, {
      pair: '0xaa4f1adb2bf0665ab24eb742cbefe1a13658d913',
    });
    const { pair: usdcWavax } = await request(graphUrl, getPairPrices, {
      pair: '0xe8440c62c6c01e7c47cbedfca80ab26be0af79db',
    });
    return quantity * radiWavax.token1Price * usdcWavax.token0Price;
  }

  call(
    abi: any[],
    toAddress: string,
    functionName: string,
    functionData: any[],
  ): any {
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
