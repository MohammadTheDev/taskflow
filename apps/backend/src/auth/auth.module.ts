import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import type { SignOptions } from 'jsonwebtoken';
import { PasswordService } from './services/password.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule,

    PassportModule.register({
      defaultStrategy: 'jwt',
    }),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('jwt.secret'),

        signOptions: {
          expiresIn:
            config.getOrThrow<SignOptions['expiresIn']>('jwt.expiresIn'),
        },
      }),
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService, PasswordService],
  exports: [JwtModule, PassportModule],
})
export class AuthModule {}
