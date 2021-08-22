export enum ChainId {
  FUJI = 43113,
  AVALANCHE = 43114,
}

export const RPC_URL = {
  [ChainId.FUJI]: 'https://api.avax-test.network/ext/bc/C/rpc',
  [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
};

export const PARTY_ADDRESS = {
  [ChainId.FUJI]: '0xEbD7fF328bC30087720e427CB8f11E9Bd8aF7d8A',
  [ChainId.AVALANCHE]: '0x15957be9802B50c6D66f58a99A2a3d73F5aaf615',
};

export const WAVAX_ADDRESS = {
  [ChainId.FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.AVALANCHE]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', //verified
};

export const WAVAX_PARTY_ADDRESS = {
  [ChainId.FUJI]: '0x17dB829157c59202Ae553a633Fd183047d533eEC',
  [ChainId.AVALANCHE]: '0xC8d03a17509Aa21f1AA1f7E04ce0A99e5dB3516E',
}; //at fuji

export const STAKING_ADDRESSES = {
  [ChainId.FUJI]: [
    '0x9BCa2B10aE15C414Fe1FD9066c1D4c2C9B6CC68e', //WAVAX-PARTY at FUJI
    '0x4De06B6F04276d733D6e57B0a16D0eceaa67CbeA', //WAVAX-FUJISTABLE at FUJI
    '0x827906e86e2898F8A71F5D76ca69579CfB55a4Eb', //PARTY-FUJISTABLE at FUJI
  ],
  [ChainId.AVALANCHE]: [
    '0xfC59bbd5f585E183FfA5cCA4B1a34Af681Afb034', //PARTY-AVAX
    '0x4D1B8c4146783Eed90d056e68605D13E0b9674ee', //PARTY-DAI
    '0x2701641b39142bfCcf6aCfaC8a31eFe5c34F2D50', //PARTY-USDT
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
