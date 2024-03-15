"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("./book.entity");
let BookService = class BookService {
    constructor(bookRepo) {
        this.bookRepo = bookRepo;
    }
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
            throw new common_1.NotFoundException("La ressource à mettre à jour n'existe pas");
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
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.BookEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookService);
//# sourceMappingURL=book.service.js.map