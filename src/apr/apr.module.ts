import { HttpModule, Module } from '@nestjs/common';
import { AprController } from './apr.controller';
import { AprService } from './apr.service';

@Module({
  imports: [HttpModule],
  controllers: [AprController],
  providers: [AprService],
})
export class AprModule {}
