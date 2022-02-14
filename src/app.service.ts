import { Injectable } from '@nestjs/common';
import { request } from 'graphql-request';
import {
  getDailyVolume,
  getPairPrices,
  graphUrl,
} from './rytellswap/graphql/queries';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Rytell API';
  }

  async getAnnualProjection(): Promise<string> {
    const { rytellDayDatas } = await request(graphUrl, getDailyVolume);
    const { pair: radiWavax } = await request(graphUrl, getPairPrices, {
      pair: '0xaa4f1adb2bf0665ab24eb742cbefe1a13658d913',
    });
    const { pair: usdcWavax } = await request(graphUrl, getPairPrices, {
      pair: '0xe8440c62c6c01e7c47cbedfca80ab26be0af79db',
    });

    const usdToRadi = (quantity: number) =>
      quantity * usdcWavax.token1Price * radiWavax.token0Price;

    let totalVolume = 0;
    rytellDayDatas.map((day) => {
      totalVolume += parseFloat(day.dailyVolumeUSD);
    });

    const dailyAvg = totalVolume / rytellDayDatas.length;
    const totalVolumeAnnualEstimate = dailyAvg * 365;
    const annualProjection = totalVolumeAnnualEstimate * 0.0003;
    const annualProjectionRadi = usdToRadi(annualProjection);

    const response = {
      volumeLast30Days: totalVolume,
      dailyAvg,
      totalVolumeAnnualEstimate,
      annualProjection,
      annualProjectionRadi,
    };
    return annualProjectionRadi.toString();
  }
}
