import { BookService } from './book.service';
import { Request } from 'express';
export declare class BookController {
    private bookSer;
    constructor(bookSer: BookService);
    getAllBooks(request: Request): Promise<import("src/book/book.entity").BookEntity[]>;
    addBook(request: Request, book: any): Promise<{
        message: string;
    }>;
    getBookById(id: number): Promise<import("src/book/book.entity").BookEntity>;
    updateBook(bookId: any, uBook: any): Promise<{
        message: string;
    }>;
    softDeleteBook(id: any): Promise<{
        message: string;
    }>;
    restoreBook(id: any): Promise<{
        message: string;
    }>;
}
