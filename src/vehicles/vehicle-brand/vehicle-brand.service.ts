import { Injectable } from '@nestjs/common';
import { CreateVehicleBrandDto } from './dto/create-vehicle-brand.dto';
import { UpdateVehicleBrandDto } from './dto/update-vehicle-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleBrand } from './entities/vehicle-brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleBrandService {
  constructor(
    @InjectRepository(VehicleBrand)
    private vehicleBrandRepository: Repository<VehicleBrand>,
  ) {}

  create(createVehicleBrandDto: CreateVehicleBrandDto) {
    return this.vehicleBrandRepository.save(createVehicleBrandDto);
  }

  findAll() {
    return this.vehicleBrandRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleBrand`;
  }

  update(id: number, updateVehicleBrandDto: UpdateVehicleBrandDto) {
    return `This action updates a #${id} vehicleBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleBrand`;
  }
}
