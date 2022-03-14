import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UserShotsDto } from './dto/userShots-dto';
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

    const user = await this.userModel.findOne({ cin }).populate('shots');

    if (!user) return { errorCin: errors.cin };
    if (new Date(user.birthday).getTime() !== new Date(birthday).getTime()) {
      return { errorBirthday: errors.birthday };
    }
    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create(createUserDto);
    return user;
  }

  async updateshots(updateShots: UserShotsDto): Promise<User | object> {
    const user = await this.userModel.updateOne(
      { _id: updateShots.userId },
      { $push: { shots: updateShots.shotId } },
    );
    return user;
  }
}
