import { MigrationInterface, QueryRunner } from "typeorm";
export declare class First1710495984746 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
