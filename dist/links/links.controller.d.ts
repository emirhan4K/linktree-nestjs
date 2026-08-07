import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
export declare class LinksController {
    private readonly linksService;
    constructor(linksService: LinksService);
    create(createLinkDto: CreateLinkDto): any;
    findAll(): import("mongoose").Query<any[], any, {}, any, "find", {}>;
    findOne(shortCode: string): import("mongoose").Query<any, any, {}, any, "findOne", {}>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, any, {}, any, "deleteOne", {}>;
}
