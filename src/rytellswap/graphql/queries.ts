import { gql } from 'graphql-request';

export const getPair = gql`
  query pairDayDatas($pair: String) {
    pairDayDatas(
      where: { pairAddress: $pair }
      first: 1
      orderBy: date
      orderDirection: desc
    ) {
      pairAddress
      date
      reserve0
      reserve1
      dailyVolumeToken0
      dailyVolumeToken1
      token0 {
        symbol
        id
        name
      }
      token1 {
        id
        symbol
        name
      }
    }
  }
`;

export const getDailyVolume = gql`
  {
    rytellDayDatas(orderBy: date, orderDirection: desc, first: 30) {
      date
      dailyVolumeUSD
      dailyVolumeETH
    }
  }
`;

export const getPairPrices = gql`
  query pair($pair: String) {
    pair(id: $pair) {
      token1 {
        symbol
      }
      token0 {
        symbol
      }
      token1Price
      token0Price
    }
  }
`;

export const graphUrl =
  'https://api.thegraph.com/subgraphs/name/pedroomedicina/rytellfuji';
