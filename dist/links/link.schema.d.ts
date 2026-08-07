import { Document } from "mongoose";
export declare class Link extends Document {
    title: string;
    url: string;
    shortCode: string;
    clickCount: number;
}
export declare const LinkSchema: import("mongoose").Schema<Link, import("mongoose").Model<Link, any, any, any, any, any, Link>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Link, Document<unknown, {}, Link, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Link & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Link, Document<unknown, {}, Link, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Link & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    url?: import("mongoose").SchemaDefinitionProperty<string, Link, Document<unknown, {}, Link, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Link & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    shortCode?: import("mongoose").SchemaDefinitionProperty<string, Link, Document<unknown, {}, Link, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Link & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Link, Document<unknown, {}, Link, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Link & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    clickCount?: import("mongoose").SchemaDefinitionProperty<number, Link, Document<unknown, {}, Link, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Link & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Link>;
