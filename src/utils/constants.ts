export enum ChainId {
  FUJI = 43113,
  AVALANCHE = 43114,
}

export const RPC_URL = {
  [ChainId.FUJI]: 'https://api.avax-test.network/ext/bc/C/rpc',
  [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
};

export const RADI_ADDRESS = {
  [ChainId.FUJI]: '0x600615234c0a427834A4344D10fEaCA374B2dfCB',
  [ChainId.AVALANCHE]: '0x9c5bBb5169B66773167d86818b3e149A4c7e1d1A',
};

export const FACTORY_ADDRESS = {
  [ChainId.FUJI]: '0x79D0b125CEA315aAB0Bb1BC2322287D3EBB88E47',
  [ChainId.AVALANCHE]: '0xe5e970FE3a90F314977a9Fd41e349486a9e8c4fe',
};

export const LIQUIDITY_POOL_MANAGER_ADDRESS = {
  [ChainId.FUJI]: '0xaf5Ce847C596323BD1113A7779269Bd731710CdA',
  [ChainId.AVALANCHE]: '0x16a449Da4B5d699aa0A8D080dE5EDa1e52Aac716',
};

export const WAVAX_ADDRESS = {
  [ChainId.FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.AVALANCHE]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', //verified
};

export const WAVAX_RADI_ADDRESS = {
  [ChainId.FUJI]: '0x24ad1A896cF3521b80D3ae428b3cA33902267250',
  [ChainId.AVALANCHE]: '0xAa4f1ADB2bF0665Ab24eB742CbeFE1A13658d913',
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
  [ChainId.FUJI]: '0xe3f486d0401fC946aEB95539fACedf0016A342BB',
  [ChainId.AVALANCHE]: '0x71FDf7e9be82896BeCddd3485ECEb41A69509A16',
};

export const TREASURY_FUND = {
  [ChainId.FUJI]: '0x6b1c1dd687ebd67f19db5bcfba993cddbc6ae997',
  [ChainId.AVALANCHE]: '0x6b1c1dd687ebd67f19db5bcfba993cddbc6ae997',
};

export const POTENTIAL_STRATEGIC_INVESTORS_FUND = {
  [ChainId.FUJI]: '0x39ce999b9f864cde0c092931e4a0b7226ea141f9',
  [ChainId.AVALANCHE]: '0x39ce999b9f864cde0c092931e4a0b7226ea141f9',
};

export const GAME_EMISSIONS_FUND = {
  [ChainId.FUJI]: '0x3059bbb4a86a502b7c2a838a4a87baf680887c04',
  [ChainId.AVALANCHE]: '0x3059bbb4a86a502b7c2a838a4a87baf680887c04',
};

export const RADI_EMITTER = {
  [ChainId.FUJI]: '0x16a449Da4B5d699aa0A8D080dE5EDa1e52Aac716',
  [ChainId.AVALANCHE]: '0xCb9d98E8E1efA7dfCD54C1C337529b9d198af81C',
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
    '0x8A715e13b00306b55D721Be11053DA74549c3874', // WAVAX-RADI
    '0xFBfA2532301324dCD25EdA7F9C089cEb2FAB1D9f', // WAVAX-USDCe
    '0x4B25bc0fE7869cE20cB2A4F78B7c0dB7c442d1D5', // WAVAX-WETHe
    '0x899d0d35712997bbBABE6506Edf44a14FC1816a3', // WAVAX-EGG
    '0x867fEd0AD388a6603A52dBEfa29cC892e2FE470d', // WAVAX-CRA
    '0x6441e036195A400da26b321835A21560fa68B32F', // RADI-EGG
    '0x38Dab2bA6dA4FF3f7EC6e0bf5793CcDe7f5e13Fe', // RADI-CRA
    '0xd7161D97157fA42e4f5Eb003BA223fb5507F008D', // RADI-MEADV2
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
