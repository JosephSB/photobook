import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn
} from "typeorm";
import { PostGallery } from "./post-gallery.model";

@Entity("posts")
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  post_id: number;

  @Column({ length: 500, nullable: true })
  about: string;

  @Column({default: 1})
  post_privacy: number; // 1 public - 2 private

  @Column({default: false})
  isActive: boolean;

  @OneToMany(() => PostGallery, (gallery) => gallery.post)
  gallery: PostGallery[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
