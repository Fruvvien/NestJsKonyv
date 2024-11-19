import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class Book{
    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string;
    author: string;
    isbn: string;

    @IsInt()
    publishYear: number;

    @IsBoolean()
    reserved: boolean
}[]