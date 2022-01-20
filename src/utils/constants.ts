export enum ChainId {
  FUJI = 43113,
  AVALANCHE = 43114,
}

export const RPC_URL = {
  [ChainId.FUJI]: 'https://api.avax-test.network/ext/bc/C/rpc',
  [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
};

export const RADI_ADDRESS = {
  [ChainId.FUJI]: '0xCcA36c23E977d6c2382dF43e930BC8dE9daC897E',
  [ChainId.AVALANCHE]: '',
};

export const FACTORY_ADDRESS = {
  [ChainId.FUJI]: '0x79D0b125CEA315aAB0Bb1BC2322287D3EBB88E47',
  [ChainId.AVALANCHE]: '0x58A08bc28f3E8dab8Fb2773D8f243bC740398b09',
};

export const LIQUIDITY_POOL_MANAGER_ADDRESS = {
  [ChainId.FUJI]: '0x6B7494a1dD11C51E04613DD148bc298082557Dfe',
  [ChainId.AVALANCHE]: '0x5a04d600B6a5B2D89946e839A9Af2f8BE11A1955',
};

export const WAVAX_ADDRESS = {
  [ChainId.FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.AVALANCHE]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', //verified
};

export const WAVAX_RADI_ADDRESS = {
  [ChainId.FUJI]: '0x24ad1A896cF3521b80D3ae428b3cA33902267250',
  [ChainId.AVALANCHE]: '0xcD5043292d99D63f42f0447d77E5cA048506Bad6',
}; //at fuji

export const TREASURY_VESTER_ADDRESS = {
  [ChainId.FUJI]: '0xe5e970FE3a90F314977a9Fd41e349486a9e8c4fe',
  [ChainId.AVALANCHE]: '0xe193DeEC5FcA8D8cF4f9208599C569EaE4e57243',
};

// THESE ARE PIÑATA ADDRESSES
export const STAKING_ADDRESSES = {
  [ChainId.FUJI]: [
    '0xCEFC7DBc094a5298303E97105Ed87EC569718c90', //WAVAX-RADI at FUJI
    '0x3D8778c01888582Cad8Dc5f472fB9862b4886646', //WAVAX-FUJISTABLE at FUJI
    '0xD4020BAD4B7BA2a5958630f15F6CcadaB33Dd150', //RADI-FUJISTABLE at FUJI
    '0x49984179429cB27a70E3691af61372D8D55b87E5', //FUJISTABLE-RIORE at FUJI
  ],
  [ChainId.AVALANCHE]: [],
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