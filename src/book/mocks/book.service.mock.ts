import { NotFoundException } from "@nestjs/common";
import { bookMock } from "./book.mock";

export class BookServiceMock {
  chercherTousLesLivres = jest.fn().mockResolvedValue(bookMock);
  chercherLivreParId = jest.fn().mockImplementation((id: number) => {
    let b = bookMock.find((book) => book.id == id);
    if (!b) return Promise.reject(new NotFoundException());
    return Promise.resolve(b);
  });
  ajouterLivre = jest.fn().mockResolvedValue({ message: "Livre ajouté" });
  editerLivre = jest.fn().mockResolvedValue({ message: "Livre mis à jour" });
}
