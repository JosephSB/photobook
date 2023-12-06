import { MigrationInterface, QueryRunner } from "typeorm";

export class Restart1701880407283 implements MigrationInterface {
    name = 'Restart1701880407283'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "post-gallery" ("post_gallery_id" SERIAL NOT NULL, "type_media" integer NOT NULL, "media_id" character varying(100) NOT NULL, "order" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "postPostId" integer, CONSTRAINT "PK_65b9d57fd261a5a11400733148b" PRIMARY KEY ("post_gallery_id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("post_id" SERIAL NOT NULL, "description" character varying(500) NOT NULL, "post_privacy" integer NOT NULL DEFAULT '1', "isActive" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userUserId" uuid, CONSTRAINT "PK_e55cc433639d0e21c3dbf637bce" PRIMARY KEY ("post_id"))`);
        await queryRunner.query(`ALTER TABLE "post-gallery" ADD CONSTRAINT "FK_838956cc34e52bff8331d7baf5d" FOREIGN KEY ("postPostId") REFERENCES "posts"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_b4855b3fc6710c40dc4eef9cf96" FOREIGN KEY ("userUserId") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_b4855b3fc6710c40dc4eef9cf96"`);
        await queryRunner.query(`ALTER TABLE "post-gallery" DROP CONSTRAINT "FK_838956cc34e52bff8331d7baf5d"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "post-gallery"`);
    }

}
