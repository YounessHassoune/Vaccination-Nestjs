import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { loginAdminDto } from './dto/admin-dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async login(@Body() login: loginAdminDto) {
    try {
      return await this.adminService.login(login);
    } catch (error) {
      return { error: error.message };
    }
  }
  @Post('createmanager')
  async createManager(@Body() createManager: loginAdminDto) {
    try {
      return await this.adminService.createManager(createManager);
    } catch (error) {
      return { error: error.message };
    }
  }
}
