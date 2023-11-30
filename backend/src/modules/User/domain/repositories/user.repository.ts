import { CreateUserDto } from "../dtos/create-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class UserRepository {
  abstract createUser(createUserDto: CreateUserDto) : Promise<UserEntity>
}