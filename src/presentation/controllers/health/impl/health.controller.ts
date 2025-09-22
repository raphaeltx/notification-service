import { Controller, Get } from '@nestjs/common';
import { IHealthController } from '../health-controller.interface';

@Controller('health')
export class HealthController implements IHealthController {
  @Get()
  checkHealth(): string {
    return 'OK';
  }
}
