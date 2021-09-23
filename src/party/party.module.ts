import { HttpModule, Module } from '@nestjs/common';
import { AprService } from 'src/apr/apr.service';
import { PartyController } from './party.controller';
import { PartyService } from './party.service';

@Module({
  imports: [HttpModule],
  controllers: [PartyController],
  providers: [PartyService],
})
export class PartyModule {}
