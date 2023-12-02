import { GetUserByIDDto } from "../../domain/dtos/get-user-by-id.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

interface GetUserByIDUseCase {
  execute(getUserByIDDto: GetUserByIDDto): Promise<UserEntity>
}

export class GetUserByID implements GetUserByIDUseCase {

  constructor(
    private readonly userRepository: UserRepository,
  ) { }

  async execute(getUserByIDDto: GetUserByIDDto): Promise<UserEntity> {
    const user = await this.userRepository.getUserByID(getUserByIDDto);
    return user
  }

}
