import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

interface CreateUserUseCase {
  execute(createUserDto: CreateUserDto): Promise<UserEntity>
}

export class CreateUser implements CreateUserUseCase {

  constructor(
    private readonly userRepository: UserRepository,
  ) { }

  async execute(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.createUser(createUserDto);
    return user
  }

}
