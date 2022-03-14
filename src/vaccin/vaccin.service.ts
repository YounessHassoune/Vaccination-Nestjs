import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVaccinDto } from './dto/create-vaccin.dto';
import { VaccinDto } from './dto/vaccin-dto';
import { Vaccin, VaccinDocument } from './vaccin.schema';

@Injectable()
export class VaccinService {
  constructor(
    @InjectModel(Vaccin.name)
    private readonly vaccinModel: Model<VaccinDocument>,
  ) {}

  async createVaccin(createVaccinDto: VaccinDto): Promise<Vaccin | object> {
    const vaccin = await this.vaccinModel.create(createVaccinDto);
    return vaccin;
  }
}
