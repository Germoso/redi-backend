import { Module } from '@nestjs/common';
import { VehicleUsageTypeService } from './vehicle-usage-type.service';
import { VehicleUsageTypeController } from './vehicle-usage-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleUsageType } from './entities/vehicle-usage-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleUsageType])],
  controllers: [VehicleUsageTypeController],
  providers: [VehicleUsageTypeService],
})
export class VehicleUsageTypeModule {}
