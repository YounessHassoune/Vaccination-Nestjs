import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './admin.schema';
import { Model } from 'mongoose';
import { loginAdminDto } from './dto/admin-dto';
import { User, UserDocument } from 'src/user/user.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel: Model<AdminDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async login(login: loginAdminDto): Promise<Admin | object> {
    const errors = {
      email: 'email doesnt exist',
      password: 'password incorrect',
    };
    const { email, password } = login;
    const admin = await this.adminModel.findOne({ email });
    if (!admin) return { error: errors.email };
    if (admin.password !== password) return { error: errors.password };
    return admin;
  }

  async createManager(createManager: loginAdminDto): Promise<Admin | object> {
    const manager = await this.adminModel.create(createManager);
    return manager;
  }
  async stats(): Promise<object> {
    const allo: any = (await this.userModel.find().populate('shots')).reduce(
      (o, { shots }) => {
        shots.forEach((e) => (o[e.name] = o[e.name] ? ++o[e.name] : 1));
        return o;
      },
      {},
    );

    return allo;
  }
}
