"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookServiceMock = void 0;
const common_1 = require("@nestjs/common");
const book_mock_1 = require("./book.mock");
class BookServiceMock {
    constructor() {
        this.chercherTousLesLivres = jest.fn().mockResolvedValue(book_mock_1.bookMock);
        this.chercherLivreParId = jest.fn().mockImplementation((id) => {
            let b = book_mock_1.bookMock.find((book) => book.id == id);
            if (!b)
                return Promise.reject(new common_1.NotFoundException());
            return Promise.resolve(b);
        });
        this.ajouterLivre = jest.fn().mockResolvedValue({ message: "Livre ajouté" });
        this.editerLivre = jest.fn().mockResolvedValue({ message: "Livre mis à jour" });
    }
}
exports.BookServiceMock = BookServiceMock;
//# sourceMappingURL=book.service.mock.js.map