import { HttpModule, Module } from '@nestjs/common';
import { AprService } from 'src/apr/apr.service';
import { PartySwapController } from './partyswap.controller';
import { PartySwapService } from './partyswap.service';

@Module({
  imports: [HttpModule],
  controllers: [PartySwapController],
  providers: [PartySwapService, AprService],
})
export class PartySwapModule {}
