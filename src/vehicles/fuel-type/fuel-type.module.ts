import { Module } from '@nestjs/common';
import { FuelTypeService } from './fuel-type.service';
import { FuelTypeController } from './fuel-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuelType } from './entities/fuel-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FuelType])],
  controllers: [FuelTypeController],
  providers: [FuelTypeService],
})
export class FuelTypeModule {}
