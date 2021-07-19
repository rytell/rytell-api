export enum ChainId {
  FUJI = 43113,
  AVALANCHE = 43114,
}

export const RPC_URL = {
  [ChainId.FUJI]: 'https://api.avax-test.network/ext/bc/C/rpc',
  [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
};

export const YAY_ADDRESS = {
  [ChainId.FUJI]: '0x0f2D40e9dcaEe7792665a420feB52E76709dC53A',
  // [ChainId.AVALANCHE]: '0x10b3A2445f29F838ed8D9d61a82205A0436B7F75', //already latest
  [ChainId.AVALANCHE]: '0x6713CdC45d304B5D3b4F4E6104203DC854823043', //PUPU
};

export const WAVAX_ADDRESS = {
  [ChainId.FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.AVALANCHE]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', //verified
};

export const WAVAX_YAY_ADDRESS = {
  [ChainId.FUJI]: '0x0483c309b77E4fD31D6698E2a00bd451aD7deaF8',
  [ChainId.AVALANCHE]: '0x114581220152D64b2D78A5b1c16aE3cEe9D7398a',
}; //at fuji

export const STAKING_ADDRESSES = {
  [ChainId.FUJI]: [
    '0x079715efAA2dE3e35Ff3A8Fa2D020035d4af567C', //NEW WAVAX-YAY at FUJI
    '0x52737B9876eEe80A57AE7Ed13aE61CE2Ee264a5E', //NEW WAVAX-FUJISTABLE at FUJI
    // '0xA050f6F3554cA23B6B934364FCAb54610855deb5', // WAVAX-YAY at FUJI
    // '0x6735b3B9f5807594d22EF2e10DAB010034982189', // WAVAX-FUJISTABLE
  ],
  [ChainId.AVALANCHE]: [
    '0x6c272EE99E8e7FbCFA59c781E82E9d64a63b9004', //WAVAX-PUPU
    '0x74F17bB07D4A096Bb24481378f27272F21012370', //USDT-PUPU
  ],
};

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
