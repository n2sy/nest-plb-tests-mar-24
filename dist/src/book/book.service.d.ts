import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';
export declare class BookService {
    private bookRepo;
    constructor(bookRepo: Repository<BookEntity>);
    chercherTousLesLivres(): Promise<BookEntity[]>;
    ajouterLivre(newBook: any): Promise<any>;
    editerLivre(uBook: any, id: any): Promise<BookEntity>;
    chercherLivreParId(id: any): Promise<BookEntity>;
    softsupprimerLivre(id: any): Promise<import("typeorm").UpdateResult>;
    restaurerLivre(id: any): void;
}
