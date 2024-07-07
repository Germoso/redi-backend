import { Inject, Injectable } from '@nestjs/common';
import { CreateEngineTypeDto } from './dto/create-engine-type.dto';
import { UpdateEngineTypeDto } from './dto/update-engine-type.dto';
import { EngineType } from './entities/engine-type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EngineTypeService {
  constructor(
    @InjectRepository(EngineType)
    private engineTypeRepository: Repository<EngineType>,
  ) {}

  create(createEngineTypeDto: CreateEngineTypeDto) {
    return this.engineTypeRepository.save(createEngineTypeDto);
  }

  findAll() {
    return this.engineTypeRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} engineType`;
  // }

  // update(id: number, updateEngineTypeDto: UpdateEngineTypeDto) {
  //   return `This action updates a #${id} engineType`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} engineType`;
  // }
}
