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
    '0xCB625aDe11aa79809f4faFe19e117e601FAC72c7', //YAY-AVAX
    '0x74F17bB07D4A096Bb24481378f27272F21012370', //YAY-DAI
    '0x32174AA3191186283B57eE182982F87601639C0b', //YAY-USDT
    '0xA2363ce89B48a51E5FaF6A75642a0b111340abD7', //AVAX-WBTC
    '0xF55741FF63EAb8E29B46DddE3Ad30E329B578B43', //AVAX-ETH
    '0x96D858143c057e608cd42972670E6b05B68d0bc3', //AVAX-LINK
    '0x0573F3177Ad734D5d16f0c78bdFFA2fD5D266059', //AVAX-aaBLOCK
    '0x51DC60DD02E6393c67F031C74021fA9bB1718262', //AVAX-SPORE
    '0xD9690b58b8e5F5aAeDe625aFfaa1F8f06A0144a5', //AVAX-BAG
    '0x421Ddca249fA5fDDCa84f5e25fCE8E45117081C7', //AVAX-PNG
    '0x2016824D66fB791c0b09daf6a94eFAa7256BdB28', //AVAX-PEFI
    '0xE3e7725728aAa5239ed73d5b163AdbB4B13C025E', //AVAX-FRAX
    '0x3b9b4502A9980be3C46BefcFa637ec9Ed0be2485', //AVAX-ZERO
    '0xa2aF347ddc105011AA07924166Fb90E3Bae172D2', //AVAX-SNOB
    '0x40beFEad4fe1Da122D51857403DF940C800F71AF', //AVAX-ELK
    '0x74Ea968eD0b1a8135A42d8B55dbE578BeD10c985', //AVAX-XAVA
    '0xBf42a3C4760d230C0FF5D661D9a444b7D6A200f7', //AVAX-AVME
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
