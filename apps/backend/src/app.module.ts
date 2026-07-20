import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { envValidationSchema } from './config/env.validation';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import jwtConfig from './config/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      validationSchema: envValidationSchema,
      load: [jwtConfig],
    }),

    PrismaModule,

    UsersModule,

    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
