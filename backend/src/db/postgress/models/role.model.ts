import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity("roles")
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  role_id: number;

  @Column({ unique: true, length: 30 })
  name: string;

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn()
  deletedAt: Date
}
