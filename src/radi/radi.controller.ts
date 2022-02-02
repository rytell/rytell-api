import { Controller, Get } from '@nestjs/common';

import { RADI_ADDRESS, RADI_EMITTER } from 'src/utils/constants';

import { RadiService } from './radi.service';

@Controller('radi')
export class RadiController {
  constructor(private readonly radiService: RadiService) {}

  chainId = 43114;

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
    return totalSupply
      .sub(await this.radiService.getRADIBalance(RADI_EMITTER[this.chainId]))
      .toString();
  }
}
