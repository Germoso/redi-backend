import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateVehicleUsageTypeDto {
  @IsString()
  @ApiProperty({
    example: 'Private',
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: 'Private vehicle usage type is for personal use.',
  })
  description: string;
}
