import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { FuelTypeModule } from './fuel-type/fuel-type.module';

@Module({
  imports: [],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
