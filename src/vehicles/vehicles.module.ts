import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './schemas/vehicle.schema';
import {
  VehicleType,
  VehicleTypeSchema,
} from './schemas/vehicle-type.schema copy';
import {
  VehicleEngineType,
  VehicleEngineTypeSchema,
} from './schemas/vehicle-engine-type.schema';
import {
  VehicleBrand,
  VehicleBrandSchema,
} from './schemas/vehicle-brand.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Vehicle.name,
        schema: VehicleSchema,
      },
      {
        name: VehicleType.name,
        schema: VehicleTypeSchema,
      },
      {
        name: VehicleEngineType.name,
        schema: VehicleEngineTypeSchema,
      },
      {
        name: VehicleBrand.name,
        schema: VehicleBrandSchema,
      },
    ]),
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
