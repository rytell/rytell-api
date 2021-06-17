import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AprModule } from './apr/apr.module';

@Module({
  imports: [AprModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
