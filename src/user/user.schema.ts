import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  cin: string;

  @Prop({ required: true })
  birthday: Date;

  @Prop()
  address: string;

  @Prop()
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
