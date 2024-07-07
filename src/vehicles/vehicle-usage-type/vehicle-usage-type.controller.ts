import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleUsageTypeService } from './vehicle-usage-type.service';
import { CreateVehicleUsageTypeDto } from './dto/create-vehicle-usage-type.dto';
import { UpdateVehicleUsageTypeDto } from './dto/update-vehicle-usage-type.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('vehicle/usage-type')
@ApiTags('Vehicles')
export class VehicleUsageTypeController {
  constructor(
    private readonly vehicleUsageTypeService: VehicleUsageTypeService,
  ) {}

  @Post()
  create(@Body() createVehicleUsageTypeDto: CreateVehicleUsageTypeDto) {
    return this.vehicleUsageTypeService.create(createVehicleUsageTypeDto);
  }

  @Get()
  findAll() {
    return this.vehicleUsageTypeService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.vehicleUsageTypeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVehicleUsageTypeDto: UpdateVehicleUsageTypeDto) {
  //   return this.vehicleUsageTypeService.update(+id, updateVehicleUsageTypeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.vehicleUsageTypeService.remove(+id);
  // }
}
