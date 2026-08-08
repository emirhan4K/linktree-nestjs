import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
   MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
   JwtModule.register(
    {
        secret:process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRES_IN as any},
      },
   ),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
