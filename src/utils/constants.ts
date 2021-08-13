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
    '0xcf3E7F88178Aa7889acAc76F08768E2EF1949Fe7', //NEW WAVAX-YAY at FUJI
    '0x9376BCCe88d8c6b0DEd85147c8685ED295e030fc', //NEW WAVAX-FUJISTABLE at FUJI
    // '0xA050f6F3554cA23B6B934364FCAb54610855deb5', // WAVAX-YAY at FUJI
    // '0x6735b3B9f5807594d22EF2e10DAB010034982189', // WAVAX-FUJISTABLE
  ],
  [ChainId.AVALANCHE]: [
    '0xfC59bbd5f585E183FfA5cCA4B1a34Af681Afb034', //YAY-AVAX
    '0x4D1B8c4146783Eed90d056e68605D13E0b9674ee', //YAY-DAI
    '0x2701641b39142bfCcf6aCfaC8a31eFe5c34F2D50', //YAY-USDT
    '0xE9070510EE2B3B8bA98225E17C3c51E1d4D0aF36', //AVAX-WBTC
    '0x3A7A60DFb11DEE4Dc166fF49877107C7703016cE', //AVAX-ETH
    '0x17228AFA1F998d3666A754E39A2A06ef0359b5e2', //AVAX-LINK
    '0xF595aA03C82c17cB95dEBdE2e06e290b860cc3e8', //AVAX-aaBLOCK
    '0xF0Fc692eb67E84bbbF2EaBdd28da662333ea16e0', //AVAX-SPORE
    '0x56a801dc2e185C7A3E6f1a2f14eD79cA81eF8998', //AVAX-BAG
    '0xE65c7A99DC4c73faF90C67c4ec8ef2a6C74FFCBE', //AVAX-PNG
    '0x7d3E93bB90a83Deaa6343dBc37822060B453f8F4', //AVAX-PEFI
    '0xBE08e949A42927E53Baa003F33642F6f7dDF927E', //AVAX-FRAX
    '0x3b9b4502A9980be3C46BefcFa637ec9Ed0be2485', //AVAX-ZERO
    '0x905B97DE228840a31D32cb5E02158DD7FA488806', //AVAX-SNOB
    '0x2ABd108E2B636754497405F52aE4A1F5dFd50D32', //AVAX-ELK
    '0xE4EF45EDb2cd401150De8709c8eE53Fa06A7A19e', //AVAX-XAVA
    '0xc3258CA969eC69CCCE3589D191C7E58EF824fdb6', //AVAX-AVME
    '0x4f5926E110FFDfDF830E2984015f31476f3fD199', //AVAX-SHERPA
    '0x4A8186F5753830B3f3B43D09746516814240ee5C', //AVAX-YAK
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
