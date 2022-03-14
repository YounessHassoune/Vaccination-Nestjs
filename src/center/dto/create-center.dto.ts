import { PartialType } from '@nestjs/mapped-types';
import { CenterDto } from './center-dto';

export class CreateCenterDto extends PartialType(CenterDto) {}
