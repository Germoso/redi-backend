import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './schemas/vehicle.schema';
import { Model } from 'mongoose';
import { VehicleType } from './schemas/vehicle-type.schema copy';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { VehicleEngineType } from './schemas/vehicle-engine-type.schema';
import { CreateEngineTypeDto } from './dto/create-engine-type.dto';
import { VehicleBrand } from './schemas/vehicle-brand.schema';
import { CreateVehicleBrandDto } from './dto/create-vehicle-brand.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
    @InjectModel(VehicleType.name) private vehicleType: Model<VehicleType>,
    @InjectModel(VehicleBrand.name) private vehicleBrand: Model<VehicleBrand>,
    @InjectModel(VehicleEngineType.name)
    private vehicleEnginetype: Model<VehicleEngineType>,
  ) {}

  // Vehicles

  createVehicle(createVehicleDto: CreateVehicleDto) {
    return new this.vehicleModel(createVehicleDto).save();
  }

  findAllVehicles() {
    return this.vehicleModel.find().exec();
  }

  // Vehicle Types

  createVehicleType(createVehicleTypeDto: CreateVehicleTypeDto) {
    return new this.vehicleModel(createVehicleTypeDto).save();
  }

  findAllVehicleTypes() {
    return this.vehicleType.find().exec();
  }

  // Vehicle Types

  createVehicleEngineType(createVehicleEngineTypeDto: CreateEngineTypeDto) {
    return new this.vehicleType(createVehicleEngineTypeDto).save();
  }

  findAllVehicleEngineTypes() {
    return this.vehicleEnginetype.find().exec();
  }

  // Vehicle Brand

  createVehicleBrand(createVehicleBrandDto: CreateVehicleBrandDto) {
    return new this.vehicleBrand(createVehicleBrandDto).save();
  }

  findAllVehicleBrand() {
    return this.vehicleBrand.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} vehicle`;
  // }

  // update(id: number, updateVehicleDto: UpdateVehicleDto) {
  //   return `This action updates a #${id} vehicle`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} vehicle`;
  // }
}
