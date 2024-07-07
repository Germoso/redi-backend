import { Inject, Injectable } from '@nestjs/common';
import { CreateFuelTypeDto } from './dto/create-fuel-type.dto';
import { UpdateFuelTypeDto } from './dto/update-fuel-type.dto';
import { FuelType } from './entities/fuel-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FuelTypeService {
  constructor(
    @InjectRepository(FuelType)
    private fuelTypeRepository: Repository<FuelType>,
  ) {}

  create(createFuelTypeDto: CreateFuelTypeDto) {
    return this.fuelTypeRepository.save(createFuelTypeDto);
  }

  findAll() {
    return this.fuelTypeRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} fuelType`;
  // }

  // update(id: number, updateFuelTypeDto: UpdateFuelTypeDto) {
  //   return `This action updates a #${id} fuelType`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} fuelType`;
  // }
}
