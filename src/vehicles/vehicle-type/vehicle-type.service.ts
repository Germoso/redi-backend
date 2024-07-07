import { Injectable } from '@nestjs/common';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleType } from './entities/vehicle-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleTypeService {
  constructor(
    @InjectRepository(VehicleType)
    private vehicleTypeRepository: Repository<VehicleType>,
  ) {}

  create(createVehicleTypeDto: CreateVehicleTypeDto) {
    return this.vehicleTypeRepository.save(createVehicleTypeDto);
  }

  findAll() {
    return this.vehicleTypeRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} vehicleType`;
  // }

  // update(id: number, updateVehicleTypeDto: UpdateVehicleTypeDto) {
  //   return `This action updates a #${id} vehicleType`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} vehicleType`;
  // }
}
