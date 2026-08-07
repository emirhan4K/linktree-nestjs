import {Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps:true})
export class Link extends Document{
    @Prop({required:true})
    title:string;

    @Prop({required:true})
    url:string;

    @Prop({required:true,unique:true})
    shortCode:string;

    @Prop({default:0})
    clickCount:number;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
