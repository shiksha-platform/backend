import {MigrationInterface, QueryRunner} from "typeorm";

export class test1644498002791 implements MigrationInterface {
    name = 'test1644498002791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adminConfig" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "createdBy" character varying, "updatedOn" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedy" character varying, "module" character varying(300) NOT NULL, "key" character varying(300) NOT NULL, "value" character varying(300) NOT NULL, "context" character varying(300) NOT NULL, "contextId" uuid NOT NULL, "canOverride" boolean NOT NULL, CONSTRAINT "PK_75f61b02cff1011090c0f04ce51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "schoolId"`);
        await queryRunner.query(`ALTER TABLE "group" ADD "schoolId" character varying(300) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "schoolId"`);
        await queryRunner.query(`ALTER TABLE "group" ADD "schoolId" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "adminConfig"`);
    }

}
