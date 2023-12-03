import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne
} from "typeorm";
import { Post } from "./post.model";

@Entity("post-gallery")
export class PostGallery extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  post_gallery_id: number;

  @Column()
  type_media: number; // 1 photo - 2 video

  @Column({ length: 100 })
  media_id: string;

  @Column()
  order: number;

  @ManyToOne(() => Post, (post) => post.gallery)
  post: Post

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
