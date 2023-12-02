import { UserDatasource } from "../../domain/datasources/user.datasource";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { GetUserByIDDto } from "../../domain/dtos/get-user-by-id.dto";
import { ValidateUserDto } from "../../domain/dtos/validate-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

export class UserRepositoryImpl implements UserRepository {

  constructor(
    private readonly userDataSource: UserDatasource
  ) { }

  getUserByID(getUserByIDDto: GetUserByIDDto): Promise<UserEntity> {
    return this.userDataSource.getUserByID(getUserByIDDto);
  }

  validateUser(validateUserDto: ValidateUserDto): Promise<UserEntity> {
    return this.userDataSource.validateUser(validateUserDto);
  }

  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userDataSource.createUser(createUserDto);
  }

}
