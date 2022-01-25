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
  [ChainId.AVALANCHE]: '0xe5e970FE3a90F314977a9Fd41e349486a9e8c4fe',
};

export const LIQUIDITY_POOL_MANAGER_ADDRESS = {
  [ChainId.FUJI]: '0x6B7494a1dD11C51E04613DD148bc298082557Dfe',
  [ChainId.AVALANCHE]: '0x0eDe43B541f4f2bFd31b9e2A202bC680C8FC9f60',
};

export const WAVAX_ADDRESS = {
  [ChainId.FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.AVALANCHE]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', //verified
};

export const WAVAX_RADI_ADDRESS = {
  [ChainId.FUJI]: '0x24ad1A896cF3521b80D3ae428b3cA33902267250',
  [ChainId.AVALANCHE]: '0x6c7c8929712da7a62bd437898b648cbb89494104',
}; //at fuji

export const STABLE_ADDRESS = {
  [ChainId.FUJI]: '0x2058ec2791dD28b6f67DB836ddf87534F4Bbdf22', //FUJISTABLE
  [ChainId.AVALANCHE]: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118', //USDT
};

export const WAVAX_STABLE_ADDRESS = {
  [ChainId.FUJI]: '0xc47df7d0c62786d4322dDD8C1b019DF70163155c',
  [ChainId.AVALANCHE]: '0x961B356b0a7fB534430640f07740Ac10Eeec8b44',
};

export const TREASURY_VESTER_ADDRESS = {
  [ChainId.FUJI]: '',
  [ChainId.AVALANCHE]: '0x8FED8324cb0fE09dC5f99B1eCD4fF09F2702266e',
};

// THESE ARE PIÑATA ADDRESSES
export const STAKING_ADDRESSES = {
  [ChainId.FUJI]: [
    '0xCEFC7DBc094a5298303E97105Ed87EC569718c90', //WAVAX-RADI at FUJI
    '0x3D8778c01888582Cad8Dc5f472fB9862b4886646', //WAVAX-FUJISTABLE at FUJI
    '0xD4020BAD4B7BA2a5958630f15F6CcadaB33Dd150', //RADI-FUJISTABLE at FUJI
    '0x49984179429cB27a70E3691af61372D8D55b87E5', //FUJISTABLE-RIORE at FUJI
  ],
  [ChainId.AVALANCHE]: [
    '0x9d297aaFf45AA5BFEE91D7007Fb650d572e98aE6', // WAVAX-RADI
    '0xE1F305a5bEbaCc2e841A811E1e5313ab4c059179', // WAVAX-USDCe
    '0x07884C3c506F3691304f9CA3e40d0bBae445726b', // WAVAX-WETHe
    '0x06713B29bf4a71D341E105cde30C16066E90c7C4', // WAVAX-EGG
    '0x3c72010e1Eb03358a916C43DBaE8e99Ee1186999', // WAVAX-CRA
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
