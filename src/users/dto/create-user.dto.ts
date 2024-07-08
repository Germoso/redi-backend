import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    example: 'Jhon Doe',
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: 'example@domain.com',
  })
  email: string;
}
