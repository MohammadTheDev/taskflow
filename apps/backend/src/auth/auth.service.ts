import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './services/password.service';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.usersService.findByEmail(dto.email);

    if (existingUser) {
    }

    const hashedPassword = await this.passwordService.hash(dto.password);

    const user = await this.usersService.create({
      email: dto.email,
      password: hashedPassword,
    });

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    });

    return {
      accessToken,
    };
  }
}
