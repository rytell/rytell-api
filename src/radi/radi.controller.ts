import { Controller, Get, Param } from '@nestjs/common';

import {
  GAME_EMISSIONS_FUND,
  POTENTIAL_STRATEGIC_INVESTORS_FUND,
  RADI_ADDRESS,
  RADI_EMITTER,
  TREASURY_FUND,
} from 'src/utils/constants';

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
      .sub(
        await this.radiService.getRADIBalance(
          GAME_EMISSIONS_FUND[this.chainId],
        ),
      )
      .sub(await this.radiService.getRADIBalance(TREASURY_FUND[this.chainId]))
      .sub(
        await this.radiService.getRADIBalance(
          POTENTIAL_STRATEGIC_INVESTORS_FUND[this.chainId],
        ),
      )
      .toString();
  }

  @Get('to-usdc/:quantity')
  async annualProjection(@Param() params): Promise<string> {
    const { quantity } = params;
    return (await this.radiService.getUsdcValue(quantity)).toString()
  }
}
