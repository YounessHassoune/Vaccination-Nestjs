import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  secretKeys = {
    USER: process.env.USER_SECRET_KEY,
    SUBADMIN: process.env.SUBADMIN_SECRET_KEY,
    ADMIN: process.env.ADMIN_SECRET_KEY,
  };

  async singToken(payload: any, role: string | null = null): Promise<string> {
    if (!payload) throw new Error('payload is required');
    if (!role) throw new Error('role is required');

    const key = this.secretKeys[role];
    if (!key) throw new Error('role is not found');

    return this.jwt.signAsync(payload, { expiresIn: '1h', secret: key });
  }

  async vlidateToken(token: string, role: string | null = null): Promise<any> {
    if (!role) return null;

    const key = this.secretKeys[role];
    if (!key) return null;

    try {
      return await this.jwt.verifyAsync(token, { secret: key });
    } catch (error) {
      return null;
    }
  }
}
