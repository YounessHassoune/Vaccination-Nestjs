import { Body, Controller, Post } from '@nestjs/common';
import { CreateVaccinDto } from './dto/create-vaccin.dto';
import { VaccinDto } from './dto/vaccin-dto';
import { VaccinService } from './vaccin.service';

@Controller('vaccin')
export class VaccinController {
  constructor(private readonly vaccinService: VaccinService) {}

  @Post('create')
  async createVaccin(@Body() createVaccinDto: VaccinDto) {
    try {
      return await this.vaccinService.createVaccin(createVaccinDto);
    } catch (error) {
      return { error: error.message };
    }
  }
}
