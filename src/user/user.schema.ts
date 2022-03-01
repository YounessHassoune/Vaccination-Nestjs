import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop(
    raw([
      {
        shot: { type: String },
        value: { type: Boolean },
      },
    ]),
  )
  vaccination?: [];
}

export const UserSchema = SchemaFactory.createForClass(User);
