import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';

import { STAKING_ADDRESSES } from 'src/utils/constants';
import { AprService } from './apr.service';

@Controller('apr')
export class AprController {
  constructor(private readonly aprService: AprService) {}

  @Get(':address/:chainId')
  async getApr(@Param() params): Promise<string> {
    const { address: stakingAddress, chainId } = params;
    if (!STAKING_ADDRESSES[chainId].includes(stakingAddress)) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    this.aprService.setChainId(chainId);
    const apr = await this.aprService.getApr(stakingAddress);
    return apr.toString();
  }
}
