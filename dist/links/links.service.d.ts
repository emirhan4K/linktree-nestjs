import { CreateLinkDto } from './dto/create-link.dto';
import { Model } from 'mongoose';
export declare class LinksService {
    private linkModel;
    constructor(linkModel: Model<any>);
    create(createLinkDto: CreateLinkDto): any;
    findAll(): import("mongoose").Query<any[], any, {}, any, "find", {}>;
    findOne({ shortCode }: {
        shortCode: any;
    }): import("mongoose").Query<any, any, {}, any, "findOne", {}>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, any, {}, any, "deleteOne", {}>;
}
