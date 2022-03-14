import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CenterDocument = Center & Document;

@Schema({ timestamps: true })
export class Center {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  region: number;

  @Prop({ required: true })
  city: number;
}

export const CenterSchema = SchemaFactory.createForClass(Center);
