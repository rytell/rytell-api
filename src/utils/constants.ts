import { BigNumber } from '@ethersproject/bignumber';

export const GRAPH_URL =
  'https://api.thegraph.com/subgraphs/name/dasconnor/pangolin-dex';
export const RPC_URL = 'https://api.avax-test.network/ext/bc/C/rpc';

export const ONE_TOKEN = BigNumber.from('1000000000000000000');
export const TOTAL_SUPPLY = ONE_TOKEN.mul(538_000_000);

export const YAY_ADDRESS = '0xf1F94960f2EE20FCB123dd5B38a9ce277cAA9855';
export const PNG_ADDRESS = '0x60781C2586D68229fde47564546784ab3fACA982';
export const WAVAX_ADDRESS = '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'; //at fuji
export const WAVAX_YAY_ADDRESS = '0x6B2031e0dd7104ae79A6c792742c55eDfF50162F'; //at fuji
export const WAVAX_PNG_ADDRESS = '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367';
export const FACTORY_ADDRESS = '0x146484CA5CAE42c58632817D74b5930172a4e044';
export const TREASURY_VESTER_ADDRESS =
  '0x6747AC215dAFfeE03a42F49FebB6ab448E12acEe';
export const COMMUNITY_TREASURY_ADDRESS =
  '0x650f5865541f6D68BdDFE977dB933C293EA72358';

// https://github.com/pangolindex/interface/blob/master/src/state/stake/hooks.ts
export const STAKING_ADDRESSES = [
  '0xA050f6F3554cA23B6B934364FCAb54610855deb5', // WAVAX-YAY at FUJI
  '0x6735b3B9f5807594d22EF2e10DAB010034982189', // WAVAX-FUJISTABLE
];

export const ERC20_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'balanceOf',
    inputs: [{ type: 'address', name: '', internalType: 'address' }],
    constant: true,
  },
];
export const STAKING_REWARDS_ABI = [
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'contract IERC20' }],
    name: 'stakingToken',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'rewardRate',
    inputs: [],
  },
];
export const PAIR_ABI = [
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'token0',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'token1',
    inputs: [],
    constant: true,
  },
];
