import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Second1710496072083 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
