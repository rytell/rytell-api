import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('volume/annual-projection')
  async annualProjection(): Promise<string> {
    return await this.appService.getAnnualProjection();
  }
}
