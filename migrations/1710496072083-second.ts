import { MigrationInterface, QueryRunner } from "typeorm";

export class Second1710496072083 implements MigrationInterface {
    name = 'Second1710496072083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`livre\` DROP COLUMN \`age\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`livre\` ADD \`age\` int NOT NULL`);
    }

}
