import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';


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

}


