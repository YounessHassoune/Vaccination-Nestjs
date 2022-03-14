import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class loginAdminDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
