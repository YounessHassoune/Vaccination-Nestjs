import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CenterService } from './center.services';
import { CreateCenterDto } from './dto/create-center.dto';
import { FindCenterDto } from './dto/find-center.dto';

@Controller('center')
export class CenterController {
  constructor(private readonly centerService: CenterService) {}

  @Post('create')
  async createCenter(@Body() createCenterDto: CreateCenterDto) {
    try {
      return await this.centerService.createCenter(createCenterDto);
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get('find/:city')
  async findCenterByCity(@Param() params: FindCenterDto) {
    try {
      return await this.centerService.findCenterByCity(params);
    } catch (error) {
      return { error: error.message };
    }
  }
}
