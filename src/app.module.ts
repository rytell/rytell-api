import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AprModule } from './apr/apr.module';
import { RadiModule } from './radi/radi.module';
import { RytellSwapModule } from './rytellswap/rytellswap.module';

@Module({
  imports: [HttpModule, AprModule, RadiModule, RytellSwapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
