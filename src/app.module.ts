import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AprModule } from './apr/apr.module';
import { PartyModule } from './party/party.module';
import { PartySwapModule } from './partyswap/partyswap.module';

@Module({
  imports: [HttpModule, AprModule, PartyModule, PartySwapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
