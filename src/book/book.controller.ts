import {
  Body,
  ConflictException,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  NotFoundException,
  Param,
  ParseFilePipe,
  ParseIntPipe,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Response } from "express";

@Controller("book")
export class BookController {
  constructor(private bookSer: BookService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("fichier"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Post("upload-v2")
  @UseInterceptors(
    FileInterceptor("fichier", {
      storage: diskStorage({
        destination: "./images",
      }),
    })
  )
  uploadFileV2(@UploadedFile() file: Express.Multer.File) {
    const reponse = {
      originalName: file.originalname,
      fileName: file.filename,
    };
    return reponse;
  }

  @Post("upload-v3")
  @UseInterceptors(
    FileInterceptor("fichier", {
      storage: diskStorage({
        destination: "./images",
        filename: (req, file, cb) => {
          const randomName =
            file.originalname.replace(/\s/g, "").substring(0, 3) +
            Date.now() +
            "." +
            file.mimetype.split("/")[1];
          cb(null, randomName);
        },
      }),
    })
  )
  uploadFileV3(@UploadedFile() file: Express.Multer.File) {
    const reponse = {
      originalName: file.originalname,
      fileName: file.filename,
    };
    return reponse;
  }

  @Post("upload-v4")
  @UseInterceptors(
    FileInterceptor("fichier", {
      storage: diskStorage({
        destination: "./images",
        filename: (req, file, cb) => {
          const randomName =
            file.originalname.replace(/\s/g, "").substring(0, 3) +
            Date.now() +
            "." +
            file.mimetype.split("/")[1];
          cb(null, randomName);
        },
      }),
    })
  )
  uploadFileV4(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 200000 }),
          new FileTypeValidator({ fileType: "image/png" }),
        ],
      })
    )
    file: Express.Multer.File
  ) {
    const reponse = {
      originalName: file.originalname,
      fileName: file.filename,
    };
    return reponse;
  }

  @Get("images/:filename")
  getFile(@Param("filename") f, @Res() response: Response) {
    return response.sendFile(f, { root: "/images" });
  }

  // @Cron("45 * * * * *")
  // @Get("cron")
  // cronTest() {
  //   console.log("Test réussi du cron");
  // }
  @Get("all")
  async getAllBooks() {
    try {
      let result = await this.bookSer.chercherTousLesLivres();
      return result;
    } catch (err) {
      throw new ConflictException();
    }
  }

  @Post("add")
  async addBook(@Body() book) {
    let result = await this.bookSer.ajouterLivre(book);
    return { message: "Livre ajouté" };
  }

  @Get("all/:id")
  async getBookById(@Param("id") id: number) {
    try {
      let result = await this.bookSer.chercherLivreParId(id);
      return result;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Put("edit/:id")
  async updateBook(@Param("id", ParseIntPipe) bookId, @Body() uBook) {
    let result = await this.bookSer.editerLivre(uBook, bookId);
    return { message: "Livre mis à jour" };
  }

  @Delete("softdel/:id")
  async softDeleteBook(@Param("id", ParseIntPipe) id) {
    let res = await this.bookSer.softsupprimerLivre(id);
    console.log(res);

    if (!res.affected) throw new NotFoundException();
    return { message: "Livre (soft) supprimé" };
  }

  @Put("restore/:id")
  async restoreBook(@Param("id", ParseIntPipe) id) {
    let res = await this.bookSer.restaurerLivre(id);
    return { message: "Livre restauré" };
  }
}
