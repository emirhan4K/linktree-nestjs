import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
export declare class LinksService {
    create(createLinkDto: CreateLinkDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLinkDto: UpdateLinkDto): string;
    remove(id: number): string;
}
