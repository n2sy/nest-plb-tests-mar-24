import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BookModule } from "./book/book.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "db/datasource";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [
    BookModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
