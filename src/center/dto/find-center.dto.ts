import { PickType } from '@nestjs/mapped-types';
import { CenterDto } from './center-dto';

export class FindCenterDto extends PickType(CenterDto, ['city']) {}
