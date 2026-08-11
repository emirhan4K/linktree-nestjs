import { RegisterDto } from './dto/register-dto';
import { LoginDto } from './dto/login-dto';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { MailService } from "../mail/mail.service";
export declare class AuthService {
    private userModel;
    private jwtService;
    private mailService;
    constructor(userModel: Model<any>, jwtService: JwtService, mailService: MailService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
