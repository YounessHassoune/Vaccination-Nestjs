import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UserShotsDto } from './dto/userShots-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('find')
  async find(@Body() findUserDto: FindUserDto) {
    return await this.userService.findByCin(findUserDto);
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.userService.createUser(createUserDto);
    } catch (error) {
      return { error: error.message };
    }
  }

  @Post('updateshots')
  async updateshots(@Body() updateShots: UserShotsDto) {
    try {
      return await this.userService.updateshots(updateShots);
    } catch (error) {
      return { error: error.message };
    }
  }
}
