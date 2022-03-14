import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Center, CenterDocument } from './center.schema';
import { CreateCenterDto } from './dto/create-center.dto';
import { FindCenterDto } from './dto/find-center.dto';

@Injectable()
export class CenterService {
  constructor(
    @InjectModel(Center.name)
    private readonly centerModel: Model<CenterDocument>,
  ) {}

  async createCenter(
    createCenterDto: CreateCenterDto,
  ): Promise<Center | object> {
    const center = await this.centerModel.create(createCenterDto);
    return center;
  }
  async findCenterByCity(
    FindCenterDto: FindCenterDto,
  ): Promise<Center | object> {
    const center = await this.centerModel.find({ city: FindCenterDto.city });
    return center;
  }
}
