import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity) private bookRepo: Repository<BookEntity>,
  ) {}

  chercherTousLesLivres() {
    return this.bookRepo.find();
  }

  ajouterLivre(newBook) {
    return this.bookRepo.save(newBook);
  }

  async editerLivre(uBook, id) {
    let b = await this.bookRepo.preload({
      id: id,
      ...uBook,
    });
    if (!b)
      throw new NotFoundException("La ressource à mettre à jour n'existe pas");
    return this.bookRepo.save(b);
  }

  chercherLivreParId(id) {
    return this.bookRepo.findOneBy({
      id: id,
    });
  }

  softsupprimerLivre(id) {
    return this.bookRepo.softDelete({ id: id });
  }

  restaurerLivre(id) {
    this.bookRepo.restore(id);
  }
}
