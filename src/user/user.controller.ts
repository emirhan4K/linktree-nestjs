import { Body, Controller, Get, Param, Patch, Req, UseGuards,} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService:UserService){}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req){
    return this.userService.getProfile(req.user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/')
  updateProfile(@Req() req, @Body() updateUserDto:UpdateUserDto){
    return this.userService.updateProfile(req.user.id,updateUserDto)
  }

  @Get(':username')
  getUserByUsername(@Param('username')username:string){
    return this.userService.getUserByUsername(username)
  }

}
