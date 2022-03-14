import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class VaccinDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['shot1', 'shot2', 'shot3'])
  name: string;

  @IsString()
  @IsNotEmpty()
  user: string;

  @IsString()
  @IsNotEmpty()
  center: string;
}
