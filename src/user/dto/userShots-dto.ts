import { IsString } from 'class-validator';

export class UserShotsDto {
  @IsString()
  shotId: string;

  @IsString()
  userId: string;
}
