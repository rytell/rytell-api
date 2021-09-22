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

export const graphUrl =
  'https://api.thegraph.com/subgraphs/name/josema03/partyswap-dex';
