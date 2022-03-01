import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FindUserDto } from './dto/find-user.dto';
import { User } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('find')
  async find(@Body() findUserDto: FindUserDto) {
    return await this.userService.findByCin(findUserDto);
  }
}
