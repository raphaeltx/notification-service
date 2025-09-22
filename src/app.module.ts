import { Module } from '@nestjs/common';
import { HealthModule } from './presentation/modules/health.module';

@Module({
  imports: [HealthModule],
})
export class AppModule {}
