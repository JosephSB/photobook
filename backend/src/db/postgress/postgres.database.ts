import { DataSource } from 'typeorm';
import config from '../../config';
import path from 'path';
import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm/data-source';
import RolesSeeder from './seeders/roles.seed';
import { Role } from './models/role.model';
import { User } from './models/user.model';
import { Post } from './models/post.model';
import { PostGallery } from './models/post-gallery.model';

const PostgressDataSource = new DataSource({
  type: "postgres",
  host: config.POSTGRESS_DB.HOST,
  port: config.POSTGRESS_DB.PORT,
  username: config.POSTGRESS_DB.USER,
  password: config.POSTGRESS_DB.PASSWORD,
  database: config.POSTGRESS_DB.NAME,
  synchronize: false,
  logging: true,
  migrationsRun: true,
  entities: [User, Role, Post, PostGallery],
  subscribers: [],
  migrations: [path.join(__dirname, "./migrations/*.ts")],
  seeds: [RolesSeeder/*path.join(__dirname, "./seeders/*.seed.ts")*/]
} as DataSourceOptions & SeederOptions)

export default PostgressDataSource
