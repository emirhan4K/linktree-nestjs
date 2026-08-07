import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
export declare class LinksController {
    private readonly linksService;
    constructor(linksService: LinksService);
    create(createLinkDto: CreateLinkDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLinkDto: UpdateLinkDto): string;
    remove(id: string): string;
}
