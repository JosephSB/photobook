import { UserDatasource } from "../../domain/datasources/user.datasource";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

export class UserRepositoryImpl implements UserRepository {

  constructor(
    private readonly userDataSource: UserDatasource
  ) { }

  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userDataSource.createUser(createUserDto);
  }

}
