import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn,
  ManyToOne
} from "typeorm";
import { PostGallery } from "./post-gallery.model";
import { User } from "./user.model";

@Entity("posts")
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  post_id: number;

  @Column({ length: 500})
  description: string;

  @Column({default: 1})
  post_privacy: number; // 1 public - 2 private

  @Column({default: false})
  isActive: boolean;

  @OneToMany(() => PostGallery, (gallery) => gallery.post)
  gallery: PostGallery[]

  @ManyToOne(() => User, (user) => user.posts)
  user: User

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
