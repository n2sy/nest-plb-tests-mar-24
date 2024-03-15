import { BookController } from "./book.controller";
import { Test, TestingModule } from "@nestjs/testing";
import { BookService } from "./book.service";
import { BookServiceMock } from "./mocks/book.service.mock";
import { bookMock } from "./mocks/book.mock";
import { NotFoundException } from "@nestjs/common";
describe("BookController", () => {
  let controller: BookController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [{ provide: BookService, useClass: BookServiceMock }],
    }).compile();
    controller = module.get<BookController>(BookController);
  });

  it("Should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return an array of books", () => {
    expect(controller.getAllBooks()).resolves.toEqual(bookMock);
  });

  it("should return a single book", () => {
    let id = 1;
    // const res = bookMock.find((b) => b.id == id);
    expect(controller.getBookById(id)).resolves.toEqual(bookMock[0]);
  });
  it("should return an error if wrong id", () => {
    let id = 2;
    // const res = bookMock.find((b) => b.id == id);
    expect(controller.getBookById(id)).rejects.toBeInstanceOf(
      NotFoundException
    );
  });

  it('should return { message: "Livre ajouté" }', () => {
    // let req : Request;
    // req['user']['id'] = 5;
    expect(
      controller.addBook({
        title: "game of thrones",
        editor: "florian",
        year: 2030,
      })
    ).resolves.toEqual({ message: "Livre ajouté" });
  });
  it('should return { message: "Livre mis à jour" }', () => {
    // let req : Request;
    // req['user']['id'] = 5;
    expect(
      controller.updateBook(1, {
        title: "game of thrones",
        editor: "florian",
        year: 2030,
      })
    ).resolves.toEqual({ message: "Livre mis à jour" });
  });
});
