import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async findByCin(findUserDto: FindUserDto): Promise<User | object> {
    const errors = {
      cin: 'cin doesnt exist',
      birthday: 'date of birth doesnt match this cin',
    };
    const { cin, birthday } = findUserDto;

    const user = await this.userModel.findOne({ cin });
    if (!user) return { eroor: errors.cin };
    if (new Date(user.birthday).getDate() !== new Date(birthday).getDate()) {
      return { eroor: errors.birthday };
    }
    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {}
}
