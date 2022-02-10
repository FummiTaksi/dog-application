import {MigrationInterface, QueryRunner} from "typeorm";

export class createHuman1644500344539 implements MigrationInterface {
    name = 'createHuman1644500344539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "human" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_fa2d597665c4d7604049d5f7792" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dog" ADD "ownerId" uuid`);
        await queryRunner.query(`ALTER TABLE "dog" ADD CONSTRAINT "FK_2cd931b431fa086ee81e43ec5da" FOREIGN KEY ("ownerId") REFERENCES "human"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dog" DROP CONSTRAINT "FK_2cd931b431fa086ee81e43ec5da"`);
        await queryRunner.query(`ALTER TABLE "dog" DROP COLUMN "ownerId"`);
        await queryRunner.query(`DROP TABLE "human"`);
    }

}
