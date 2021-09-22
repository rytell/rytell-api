import { Controller, Get } from '@nestjs/common';
import { request } from 'graphql-request';
import { getPair, graphUrl } from './graphql/queries';
import { PartySwapService } from './partyswap.service';

@Controller('partyswap/v1')
export class PartySwapController {
  constructor(private readonly partySwapService: PartySwapService) {}

  @Get('allPairs')
  async getAllPairsInfo(): Promise<any> {
    const pairsCount = await this.partySwapService.getPairsCount();
    const pairAddressHolder = [];
    for (let i = 0; i <= pairsCount - 1; i++) {
      pairAddressHolder.push({});
    }

    const pairAddresses = await Promise.all(
      pairAddressHolder.map(async (holder, index) => {
        return await this.partySwapService.getPairAt(index);
      }),
    );

    const infoPerPair = await Promise.all(
      pairAddresses.map((pair) =>
        request(graphUrl, getPair, {
          pair,
        }),
      ),
    );

    const response = {};

    infoPerPair.forEach((info) => {
      const { pairDayDatas } = info;
      if (pairDayDatas && pairDayDatas[0]) {
        const {
          dailyVolumeToken0,
          dailyVolumeToken1,
          reserve0,
          reserve1,
          token0,
          token1,
        } = pairDayDatas[0];

        if (token0 && token1) {
          response[`${token0.id}_${token1.id}`] = {
            base_id: token0.id,
            base_name: token0.name,
            base_symbol: token0.symbol,
            quote_id: token1.id,
            quote_name: token1.name,
            quote_symbol: token1.symbol,
            last_price: reserve1 / reserve0,
            base_volume: dailyVolumeToken0,
            quote_volume: dailyVolumeToken1,
          };
        }
      }
    });

    return response;
  }
}
