import { PartialType } from '@nestjs/swagger';
import { CreateVehicleUsageTypeDto } from './create-vehicle-usage-type.dto';

export class UpdateVehicleUsageTypeDto extends PartialType(CreateVehicleUsageTypeDto) {}
