import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateLinkDto } from './dto/update-link.dto';

@Injectable()
export class LinksService {
  constructor(@InjectModel('Link') private linkModel: Model<any>) {}

  create(createLinkDto: CreateLinkDto) {
    const createdLink = new this.linkModel(createLinkDto);
    return createdLink.save();
  }

  findAll() {
    return this.linkModel.find();
  }

  findOne({shortCode}) {
    return this.linkModel.findOne({ shortCode });
  }

  remove(id: string) {
    return this.linkModel.deleteOne({ _id: id });
  }

  update(id: string, updateLinkDto: UpdateLinkDto) {
    return this.linkModel.updateOne({ _id: id }, updateLinkDto);
  }
}
