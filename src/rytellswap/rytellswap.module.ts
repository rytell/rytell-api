import { HttpModule, Module } from '@nestjs/common';
import { AprService } from 'src/apr/apr.service';
import { RytellSwapController } from './rytellswap.controller';
import { RytellSwapService } from './rytellswap.service';

@Module({
  imports: [HttpModule],
  controllers: [RytellSwapController],
  providers: [RytellSwapService, AprService],
})
export class RytellSwapModule {}
