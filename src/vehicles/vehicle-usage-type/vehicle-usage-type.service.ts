import { Injectable } from '@nestjs/common';
import { CreateVehicleUsageTypeDto } from './dto/create-vehicle-usage-type.dto';
import { UpdateVehicleUsageTypeDto } from './dto/update-vehicle-usage-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleUsageType } from './entities/vehicle-usage-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleUsageTypeService {
  constructor(
    @InjectRepository(VehicleUsageType)
    private vehicleUsageTypeRepository: Repository<VehicleUsageType>,
  ) {}

  create(createVehicleUsageTypeDto: CreateVehicleUsageTypeDto) {
    return this.vehicleUsageTypeRepository.save(createVehicleUsageTypeDto);
  }

  findAll() {
    return this.vehicleUsageTypeRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} vehicleUsageType`;
  // }

  // update(id: number, updateVehicleUsageTypeDto: UpdateVehicleUsageTypeDto) {
  //   return `This action updates a #${id} vehicleUsageType`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} vehicleUsageType`;
  // }
}
