import { HttpModule, Module } from '@nestjs/common';
import { RadiController } from './radi.controller';
import { RadiService } from './radi.service';

@Module({
  imports: [HttpModule],
  controllers: [RadiController],
  providers: [RadiService],
})
export class RadiModule {}
