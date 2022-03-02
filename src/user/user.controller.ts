import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
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
    return createUserDto;
  }
}
