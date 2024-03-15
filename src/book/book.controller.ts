import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req
} from '@nestjs/common';
import { BookService } from './book.service';
import { Request } from 'express';

@Controller('book')
export class BookController {
  constructor(private bookSer: BookService) {}

  @Get('all')
  async getAllBooks(@Req() request: Request) {
    try {
      let result = await this.bookSer.chercherTousLesLivres();
      return result;
    } catch (err) {
      throw new ConflictException();
    }
  }

  @Post('add')
  async addBook(@Req() request: Request, @Body() book) {
      let result = await this.bookSer.ajouterLivre(book);
      return { message: 'Livre ajouté' };
    
  }

  @Get('all/:id')
  async getBookById(@Param('id') id: number) {
    try {
      let result = await this.bookSer.chercherLivreParId(id);
      return result;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Put('edit/:id')
  async updateBook(
    @Param('id', ParseIntPipe) bookId,
    @Body() uBook,
  ) {
    let result = await this.bookSer.editerLivre(uBook, bookId);
    return { message: 'Livre mise à jour' };
  }

  @Delete('softdel/:id')
  async softDeleteBook(
    @Param('id', ParseIntPipe) id,
  ) {
    let res = await this.bookSer.softsupprimerLivre(id);
    console.log(res);

    if (!res.affected) throw new NotFoundException();
    return { message: 'Livre (soft) supprimé' };
  }

  @Put('restore/:id')
  async restoreBook(@Param('id', ParseIntPipe) id) {
    let res = await this.bookSer.restaurerLivre(id);
    return { message: 'Livre restauré' };
  }
  
}
