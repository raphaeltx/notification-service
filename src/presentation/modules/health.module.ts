import { Module } from '@nestjs/common';
import { HealthController } from '../controllers/health/impl/health.controller';

@Module({
  controllers: [HealthController]
})
export class HealthModule {}