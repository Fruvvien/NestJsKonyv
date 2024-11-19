import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './book.dto';
import { CreateBook } from './createBook.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  } 

  
  books :Book[] = [
    {
      id: 1,
      title: "asd",
      author : "asdadsads",
      isbn: "0-4029-7311-9",
      publishYear:2004,
      reserved: false

    },
    {
      id: 2,
      title: "afas",
      author:"ddddds",
      isbn: "0-8543-2747-9",
      publishYear:2003,
      reserved: true

    },
    {
      id: 3,
      title: "akkghgkh",
      author:"uzfbv",
      isbn: "0-3554-5579-X",
      publishYear:2005,
      reserved: false

    },
    {
      id: 4,
      title: "eoiejdmsa",
      author:"fdmbdjsef",
      isbn: "0-5270-5667-7",
      publishYear:2006,
      reserved: true

    }
  ];
  nextId : number = 5;


  @Get('books')
  konyvLekerdezes(){
    return this.books.map((book, id)=> {return {name: book, id: id}})
  }

  @Get('books/:id')
  konyLekerdezesIdAlapjan(@Param('id') id: number){
    
    const lekerdezettId =  this.books.find(book => book.id == id);
    return lekerdezettId;

  }


  @Delete('books/:id')
  @HttpCode(204)
  konyvTorlesIdAlapjan(@Param('id') id: number){
    return this.books.filter(book => book.id != id);
  }


  @Post('bookPost')
  @HttpCode(201)
  konyvHozzaadas(@Body() createBook: CreateBook){
    const newBook : Book = {
      ...createBook,
      id: this.nextId
    }
    this.nextId ++

    this.books.push(newBook);
    return newBook
  }

  @Patch('bookPatch/:id')
  @HttpCode(200)
  patchIdAlapjan(@Param('id') id: number){
    const book = this.books.findIndex(book => book.id == id);
     
  }



  
}
