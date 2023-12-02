import { CreateUserDto } from "../dtos/create-user.dto";
import { ValidateUserDto } from "../dtos/validate-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class UserDatasource {
  abstract createUser(createUserDto: CreateUserDto) : Promise<UserEntity>
  abstract validateUser(validateUserDto: ValidateUserDto) : Promise<UserEntity>
}
