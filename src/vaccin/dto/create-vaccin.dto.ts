import { PartialType } from '@nestjs/mapped-types';
import { VaccinDto } from './vaccin-dto';

export class CreateVaccinDto extends PartialType(VaccinDto) {}
