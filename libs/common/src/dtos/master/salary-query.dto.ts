import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SalaryQueryDto {
  @ApiProperty({
    description: 'Gol/Ru',
    example: 'IIA',
  })
  @IsString()
  @IsOptional()
  golru: string;

  @ApiProperty({
    description: 'Periode',
    example: '2021',
  })
  @IsString()
  @IsOptional()
  periode: string;
}
