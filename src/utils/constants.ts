export enum ChainId {
  FUJI = 43113,
  AVALANCHE = 43114,
}

export const RPC_URL = {
  [ChainId.FUJI]: 'https://api.avax-test.network/ext/bc/C/rpc',
  [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
};

export const PARTY_ADDRESS = {
  [ChainId.FUJI]: '0xb68Dd903198339f1818Fb3710AB4Ea2Ff85231B8',
  [ChainId.AVALANCHE]: '0x69A61f38Df59CBB51962E69C54D39184E21C27Ec',
};

export const WAVAX_ADDRESS = {
  [ChainId.FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.AVALANCHE]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', //verified
};

export const WAVAX_PARTY_ADDRESS = {
  [ChainId.FUJI]: '0x4D2eF43d714308313F15660f91Ab4E4690a12D06',
  [ChainId.AVALANCHE]: '0xcD5043292d99D63f42f0447d77E5cA048506Bad6',
}; //at fuji

export const TREASURY_VESTER_ADDRESS = {
  [ChainId.FUJI]: '0x3eF57d246E14fD7d2967bF7E940A10aE094930C3',
  [ChainId.AVALANCHE]: '0xe193DeEC5FcA8D8cF4f9208599C569EaE4e57243',
};

export const STAKING_ADDRESSES = {
  [ChainId.FUJI]: [
    '0x9BCa2B10aE15C414Fe1FD9066c1D4c2C9B6CC68e', //WAVAX-PARTY at FUJI
    '0x4De06B6F04276d733D6e57B0a16D0eceaa67CbeA', //WAVAX-FUJISTABLE at FUJI
    '0x827906e86e2898F8A71F5D76ca69579CfB55a4Eb', //PARTY-FUJISTABLE at FUJI
  ],
  [ChainId.AVALANCHE]: [
    '0x1081e6063Dbe43e7150ec7D28a705beC98dFE070', //PARTY-AVAX
    '0x04FA5D713F256A785E39385Ae071cB05adba97F8', //PARTY-DAI.e
    '0x5A4f44127ec4bd4164B09Db623A9d65523D53434', //PARTY-USDT.e
    '0x9201908b21115fEE17dB08ceA775c5D05851a6CA', //AVAX-WBTC.e
    '0x897c3e7A9bAECf1D096Ab480e50149E952fbB7F0', //AVAX-WETH.e
    '0xE5CacbB457A3d96051C581615184da5660286798', //AVAX-LINK.e
    '0xb466124bd5ED4851f96A3Ca18f099FfeF7be2612', //AVAX-RenDOGE
    '0xf9ac26A28b5dA299E8Ff51F2f8eaB9CBa911668b', //AVAX-aaBLOCK
    '0x1fA07d1481e264F4FFE857C918CE27e841Ba427b', //AVAX-SPORE
    '0x8AdC76373B7c8fD9154528beD63E6ff30411cEb4', //AVAX-BAG
    '0xE5F2bDe8F9E23Bff7D9af7F4f6D98E1efC08A365', //AVAX-PNG
    '0x6665a74B3BBe312d01d8Ffa9D2a078798a216c87', //AVAX-PEFI
    '0x83B90d01E40ACC8F19d3FE6374AcC99c56db19C7', //AVAX-FRAX
    '0x3b9b4502A9980be3C46BefcFa637ec9Ed0be2485', //AVAX-ZERO - DELISTED IN UI
    '0x1a70d0AcC5EBA0c8515911301a8B0EE5F5070c66', //AVAX-SNOB
    '0xb247F29BeD505052bbEbe911D4691e93485Aaf83', //AVAX-ELK
    '0xB7517d0f70A6c884239345B0AC8AaFD436227Aa8', //AVAX-XAVA
    '0x12711334DB498BA2768161335016e2724A15e4E8', //AVAX-AVME
    '0xaa0e5e6B3dAbbc0C34BB2480791fE2409b630F0F', //AVAX-SHERPA
    '0x751c2f4a4B32D79B54FdF44c25e85B0aa5232bd0', //AVAX-YAK
    '0x30Ac2b14320112a4922D5D3B926dcdcb19c502a8', //AVAX-BENQUI
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
