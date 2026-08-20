import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService  {
  constructor(@InjectModel(User.name)
  private userModel:Model<any>){}

  async getProfile(userId:string){
    const user = await this.userModel.findById(userId).select('-password')
    if(!user){
      throw new NotFoundException('Kullanıcı bulunamadı!')
    }
    return user;
}
  async updateProfile(userId:string,updateUserDto:UpdateUserDto){
    const user = await this.userModel.findByIdAndUpdate(
      userId,
      updateUserDto
  ).select('-password');
    if(!user){
      throw new NotFoundException('Kullanıcı bulunamadı!')
    }
    return user;
  }

}


