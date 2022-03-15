import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private reflector: Reflector, private authService: AuthService) {}
  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const role = this.reflector.get<string>('role', context.getHandler());

    const Authorization = request.get('Authorization');
    if (!Authorization) throw new UnauthorizedException();

    const token = Authorization.replace('Bearer ', '');
    const payload = await this.authService.vlidateToken(token, role);
    if (!payload) throw new UnauthorizedException();
    request.payload = payload;

    return true;
  }
}
