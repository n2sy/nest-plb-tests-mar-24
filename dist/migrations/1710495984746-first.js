"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.First1710495984746 = void 0;
class First1710495984746 {
    constructor() {
        this.name = 'First1710495984746';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`livre\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(50) NOT NULL, \`editor\` varchar(255) NOT NULL, \`year\` int NOT NULL, \`age\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`livre\``);
    }
}
exports.First1710495984746 = First1710495984746;
//# sourceMappingURL=1710495984746-first.js.map