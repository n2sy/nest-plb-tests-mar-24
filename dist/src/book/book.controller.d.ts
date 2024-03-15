/// <reference types="multer" />
import { BookService } from "./book.service";
import { Response } from "express";
export declare class BookController {
    private bookSer;
    constructor(bookSer: BookService);
    uploadFile(file: Express.Multer.File): void;
    uploadFileV2(file: Express.Multer.File): {
        originalName: string;
        fileName: string;
    };
    uploadFileV3(file: Express.Multer.File): {
        originalName: string;
        fileName: string;
    };
    uploadFileV4(file: Express.Multer.File): {
        originalName: string;
        fileName: string;
    };
    getFile(f: any, response: Response): void;
    getAllBooks(): Promise<import("src/book/book.entity").BookEntity[]>;
    addBook(book: any): Promise<{
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
