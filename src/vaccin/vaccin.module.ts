import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccinController } from './vaccin.controller';
import { Vaccin, VaccinSchema } from './vaccin.schema';
import { VaccinService } from './vaccin.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vaccin.name, schema: VaccinSchema }]),
  ],
  controllers: [VaccinController],
  providers: [VaccinService],
})
export class VaccinModule {}
