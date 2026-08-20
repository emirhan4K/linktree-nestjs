import { Controller, Get, Req, UseGuards,} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';

@Controller('user')
export class UserController {
  constructor(private userService:UserService){}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req){
    return this.userService.getProfile(req.user.id)
  }

}
