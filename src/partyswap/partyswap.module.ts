import { HttpModule, Module } from '@nestjs/common';
import { PartySwapController } from './partyswap.controller';
import { PartySwapService } from './partyswap.service';

@Module({
  imports: [HttpModule],
  controllers: [PartySwapController],
  providers: [PartySwapService],
})
export class PartySwapModule {}
