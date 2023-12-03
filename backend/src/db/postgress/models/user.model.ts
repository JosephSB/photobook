import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Role } from "./role.model";
import { Post } from "./post.model";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  user_id: string;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  lastname: string;

  @Column({ length: 300, nullable: true })
  about: string;

  @Column({ length: 100, nullable: true })
  photo_id: string;

  @Column({ length: 40, unique: true})
  username: string;

  @ManyToMany(() => Post)
  @JoinTable()
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
