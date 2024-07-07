import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFuelTypeDto {
  @IsString()
  @ApiProperty({
    example: 'Petrol',
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: 'Petrol fuel type is for petrol vehicles.',
  })
  description: string;
}
