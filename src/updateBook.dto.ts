import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class updateBook{
    

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    title: string;
    author: string;
    isbn: string;

    @IsOptional()
    @IsInt()
    publishYear: number;

    @IsOptional()
    @IsBoolean()
    reserved: boolean
}