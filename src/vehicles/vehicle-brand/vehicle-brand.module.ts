import { Module } from '@nestjs/common';
import { VehicleBrandService } from './vehicle-brand.service';
import { VehicleBrandController } from './vehicle-brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleBrand } from './entities/vehicle-brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleBrand])],
  controllers: [VehicleBrandController],
  providers: [VehicleBrandService],
})
export class VehicleBrandModule {}
