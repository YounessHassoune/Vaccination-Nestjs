import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Center } from 'src/center/center.schema';
import { User } from '../user/user.schema';
export type VaccinDocument = Vaccin & Document;

@Schema({ timestamps: true })
export class Vaccin {
  @Prop({ required: true })
  name: 'shot1' | 'shot2' | 'shot3';

  @Prop({ required: true, default: true })
  statuts: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Center' })
  center: Center;
}

export const VaccinSchema = SchemaFactory.createForClass(Vaccin);
