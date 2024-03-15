import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 8889,
  username: "root",
  password: "root",
  database: "books",
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/migrations/*.js"],
  migrationsTableName: "plbmigrations",

  //synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
