import { IsDateString, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  name: string;

  @IsString()
  cin: string;

  @IsDateString()
  birthday: Date;

  @IsString()
  address: string;

  @IsString()
  phone: string;
}
