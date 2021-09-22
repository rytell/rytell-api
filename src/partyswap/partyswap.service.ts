import { Interface } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';
import { HttpService, Injectable } from '@nestjs/common';
import {
  ChainId,
  FACTORY_ABI,
  FACTORY_ADDRESS,
  RPC_URL,
} from 'src/utils/constants';

@Injectable()
export class PartySwapService {
  constructor(private httpService: HttpService) {}

  async getPairAt(index: string | number) {
    const {
      data: { result },
    } = await this.call(
      FACTORY_ABI,
      FACTORY_ADDRESS[ChainId.AVALANCHE],
      'allPairs',
      [index.toString()],
    );

    return BigNumber.from(result).toHexString();
  }

  async getPairsCount() {
    const {
      data: { result },
    } = await this.call(
      FACTORY_ABI,
      FACTORY_ADDRESS[ChainId.AVALANCHE],
      'allPairsLength ',
      [],
    );

    return BigNumber.from(result).toNumber();
  }

  call(
    abi: any[],
    toAddress: string,
    functionName: string,
    functionData: any[],
  ) {
    const iface = new Interface(abi);

    return this.httpService
      .post(RPC_URL[43114], {
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
