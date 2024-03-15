"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Second1710496072083 = void 0;
class Second1710496072083 {
    constructor() {
        this.name = 'Second1710496072083';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`livre\` DROP COLUMN \`age\``);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`livre\` ADD \`age\` int NOT NULL`);
    }
}
exports.Second1710496072083 = Second1710496072083;
//# sourceMappingURL=1710496072083-second.js.map