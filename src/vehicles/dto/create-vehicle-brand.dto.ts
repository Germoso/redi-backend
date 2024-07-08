import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateVehicleBrandDto {
  @IsString()
  @ApiProperty({
    example: 'Toyota',
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: 'Corolla',
  })
  model: string;
}
