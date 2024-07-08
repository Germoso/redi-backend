import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateVehicleTypeDto {
  @IsString()
  @ApiProperty({ example: 'Camioneta' })
  name: string;
  @IsString()
  @ApiProperty({ example: 'Description of the vehicle type' })
  description: string;
  // file: string;
}
