import { Injectable } from '@nestjs/common';
import { request } from 'graphql-request';
import { getDailyVolume, graphUrl } from './rytellswap/graphql/queries';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Rytell API';
  }

  async getAnnualProjection(): Promise<any> {
    const { rytellDayDatas } = await request(graphUrl, getDailyVolume)
    let totalVolume = 0
    rytellDayDatas.map( day => {
      totalVolume += parseFloat(day.dailyVolumeUSD)
    })

    const dailyAvg = totalVolume / rytellDayDatas.length;
    const totalAnnualEstimate = dailyAvg * 365
    const annualProjection = totalAnnualEstimate * 0.03

    const response = {
      volumeLast30Days: totalVolume,
      dailyAvg,
      totalAnnualEstimate,
      annualProjection
    }
    return response
  }
}
