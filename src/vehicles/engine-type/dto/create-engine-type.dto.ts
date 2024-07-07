import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEngineTypeDto {
  @IsString()
  @ApiProperty({
    example: 'V8',
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: 'V8-6.2L',
  })
  model: string;
  @IsString()
  @ApiProperty({
    example: 'V8-6.2L engine type.',
  })
  description: string;
  // @IsString()
  // file: string;
}
