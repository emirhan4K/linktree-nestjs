import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register-dto';
import { LoginDto } from './dto/login-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { access } from 'fs';

@Injectable()
export class AuthService {
  jwtService: any;
  constructor(@InjectModel('User')private userModel:Model<any>,jwtService: JwtService){}

  async register(registerDto: RegisterDto){
   const existingUser = await this.userModel.findOne({email: registerDto.email})
    if(existingUser){
      throw new BadRequestException('Bu e-posta adresi zaten kullanımda!')
    }
    const hashedPassword = await bcrypt.hash(registerDto.password,10)
    const newUser = new this.userModel({
      name: registerDto.name,
      email: registerDto.email,
      password:hashedPassword
    });
    await newUser.save();
    return {message: "Kayıt işlemi başarıyla tamamlandı."}
  }
  async login(loginDto : LoginDto){
    const user = await this.userModel.findOne({email:loginDto.email})
    if(!user){
      throw new UnauthorizedException("E-posta veya şifre hatalı!")
    }
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password); 
    if(!isPasswordValid){
      throw new UnauthorizedException("E-posta veya şifre hatalı!")
    }
    const payload = {sub: user._id, email: user.email}
    const generatedCode = await this.jwtService.signAsync(payload)
    return {access_token : generatedCode}
    
  }
}
