import { Controller, Get } from '@nestjs/common';

import { RADI_ADDRESS } from 'src/utils/constants';

import { RadiService } from './radi.service';

@Controller('radi')
export class RadiController {
  constructor(private readonly radiService: RadiService) {}

  chainId = 43113;

  @Get('totalSupply')
  async getTotalSupply(): Promise<string> {
    this.radiService.setChainId(this.chainId);
    const totalSupply = await this.radiService.getTotalSupply(
      RADI_ADDRESS[this.chainId],
    );
    return totalSupply.toString();
  }

  @Get('circulating')
  async getCirculating(): Promise<string> {
    this.radiService.setChainId(this.chainId);
    const totalSupply = await this.radiService.getTotalSupply(
      RADI_ADDRESS[this.chainId],
    );
    return (
      totalSupply
        // .sub(
        //   await this.radiService.getRADIBalance(
        //     TREASURY_VESTER_ADDRESS[this.chainId],
        //   ),
        // )
        // .sub(
        //   await this.radiService.getRADIBalance(
        //     '0xE2fE530C047f2d85298b07D9333C05737f1435fB', // Lock account for treasury
        //   ),
        // )
        .toString()
    );
  }
}
