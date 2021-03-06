import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Payload } from 'src/decorators/payload.decorator';
import { Role } from 'src/decorators/role.decorator';
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

  @Role('ADMIN')
  @UseGuards(JwtGuard)
  @Get('stats')
  async stats(@Payload() payload: unknown) {
    console.log(payload);

    try {
      return await this.adminService.stats();
    } catch (error) {
      return { error: error.message };
    }
  }
}
