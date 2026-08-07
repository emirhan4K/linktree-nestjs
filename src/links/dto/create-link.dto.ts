import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateLinkDto {
    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    @IsUrl()
    @IsString()
    url: string;

    @IsString()
    @IsNotEmpty()
    shortCode: string;
}
