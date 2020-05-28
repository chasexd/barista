import { MigrationInterface, QueryRunner } from 'typeorm';

export class NpmRegistry1567166765557 implements MigrationInterface {
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "system_configuration" DROP COLUMN "npm_registry"`);
    await queryRunner.query(`ALTER TABLE "system_configuration" DROP COLUMN "npm_cache_directory"`);
  }

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "system_configuration" ADD "npm_cache_directory" character varying`);
    await queryRunner.query(`ALTER TABLE "system_configuration" ADD "npm_registry" character varying`);
    await queryRunner.query(`UPDATE "system_configuration" SET "npm_registry"='https://registry.npmjs.org/'`);
    await queryRunner.query(`UPDATE "system_configuration" SET "npm_cache_directory"='/usr/src/app/tools'`);
  }
}
