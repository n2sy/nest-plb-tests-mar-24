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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let BookController = class BookController {
    constructor(bookSer) {
        this.bookSer = bookSer;
    }
    uploadFile(file) {
        console.log(file);
    }
    uploadFileV2(file) {
        const reponse = {
            originalName: file.originalname,
            fileName: file.filename,
        };
        return reponse;
    }
    uploadFileV3(file) {
        const reponse = {
            originalName: file.originalname,
            fileName: file.filename,
        };
        return reponse;
    }
    uploadFileV4(file) {
        const reponse = {
            originalName: file.originalname,
            fileName: file.filename,
        };
        return reponse;
    }
    getFile(f, response) {
        return response.sendFile(f, { root: "images" });
    }
    async getAllBooks() {
        try {
            let result = await this.bookSer.chercherTousLesLivres();
            return result;
        }
        catch (err) {
            throw new common_1.ConflictException();
        }
    }
    async addBook(book) {
        let result = await this.bookSer.ajouterLivre(book);
        return { message: "Livre ajouté" };
    }
    async getBookById(id) {
        try {
            let result = await this.bookSer.chercherLivreParId(id);
            return result;
        }
        catch (err) {
            throw new common_1.NotFoundException();
        }
    }
    async updateBook(bookId, uBook) {
        let result = await this.bookSer.editerLivre(uBook, bookId);
        return { message: "Livre mis à jour" };
    }
    async softDeleteBook(id) {
        let res = await this.bookSer.softsupprimerLivre(id);
        console.log(res);
        if (!res.affected)
            throw new common_1.NotFoundException();
        return { message: "Livre (soft) supprimé" };
    }
    async restoreBook(id) {
        let res = await this.bookSer.restaurerLivre(id);
        return { message: "Livre restauré" };
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Post)("upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("fichier")),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)("upload-v2"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("fichier", {
        storage: (0, multer_1.diskStorage)({
            destination: "./images",
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "uploadFileV2", null);
__decorate([
    (0, common_1.Post)("upload-v3"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("fichier", {
        storage: (0, multer_1.diskStorage)({
            destination: "./images",
            filename: (req, file, cb) => {
                const randomName = file.originalname.replace(/\s/g, "").substring(0, 3) +
                    Date.now() +
                    "." +
                    file.mimetype.split("/")[1];
                cb(null, randomName);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "uploadFileV3", null);
__decorate([
    (0, common_1.Post)("upload-v4"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("fichier", {
        storage: (0, multer_1.diskStorage)({
            destination: "./images",
            filename: (req, file, cb) => {
                const randomName = file.originalname.replace(/\s/g, "").substring(0, 3) +
                    Date.now() +
                    "." +
                    file.mimetype.split("/")[1];
                cb(null, randomName);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 200000 }),
            new common_1.FileTypeValidator({ fileType: "image/png" }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "uploadFileV4", null);
__decorate([
    (0, common_1.Get)("images/:filename"),
    __param(0, (0, common_1.Param)("filename")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Post)("add"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "addBook", null);
__decorate([
    (0, common_1.Get)("all/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBookById", null);
__decorate([
    (0, common_1.Put)("edit/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)("softdel/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "softDeleteBook", null);
__decorate([
    (0, common_1.Put)("restore/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "restoreBook", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)("book"),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map