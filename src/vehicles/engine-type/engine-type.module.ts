import { Module } from '@nestjs/common';
import { EngineTypeService } from './engine-type.service';
import { EngineTypeController } from './engine-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineType } from './entities/engine-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EngineType])],
  controllers: [EngineTypeController],
  providers: [EngineTypeService],
})
export class EngineTypeModule {}
