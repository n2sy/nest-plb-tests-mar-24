import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BookModule } from "./book/book.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "db/datasource";

@Module({
  imports: [BookModule, TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
