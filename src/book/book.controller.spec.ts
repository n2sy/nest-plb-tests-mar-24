import { BookController } from "./book.controller";
import { Test, TestingModule } from "@nestjs/testing";
describe("BookController", () => {
  let controller: BookController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
    }).compile();
    controller = module.get<BookController>(BookController);
  });

  it("Should be defined", () => {
    expect(controller).toBeDefined();
  });
});
