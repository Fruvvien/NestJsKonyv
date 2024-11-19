import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateBook {
    @IsString()
    @IsNotEmpty()
    title: string;
    author: string;
    isbn: string;

    @IsInt()
    publishYear: number;

    @IsBoolean()
    reserved: boolean
}