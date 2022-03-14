import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Vaccin } from 'src/vaccin/vaccin.schema';
export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  cin: string;

  @Prop({ required: true })
  birthday: Date;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vaccin' }] })
  shots: Vaccin[];
}

export const UserSchema = SchemaFactory.createForClass(User);
