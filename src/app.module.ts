import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AprModule } from './apr/apr.module';
import { PartyController } from './party/party.controller';
import { PartyModule } from './party/party.module';
import { PartyService } from './party/party.service';

@Module({
  imports: [AprModule, PartyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
