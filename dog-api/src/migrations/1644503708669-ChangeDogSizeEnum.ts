import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeDogSizeEnum1644503708669 implements MigrationInterface {
  name = 'ChangeDogSizeEnum1644503708669';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "dog" DROP COLUMN "size"`);
    await queryRunner.query(
      `ALTER TABLE "dog" ADD "size" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "dog" DROP COLUMN "size"`);
    await queryRunner.query(`ALTER TABLE "dog" ADD "size" integer NOT NULL`);
  }
}
