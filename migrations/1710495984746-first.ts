import { MigrationInterface, QueryRunner } from "typeorm";

export class First1710495984746 implements MigrationInterface {
    name = 'First1710495984746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`livre\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(50) NOT NULL, \`editor\` varchar(255) NOT NULL, \`year\` int NOT NULL, \`age\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`livre\``);
    }

}
