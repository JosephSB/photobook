import { TokenPayload } from "../../../Auth/interfaces/TokenPayload.interface";
import { CustomError } from "../../../Error/custom-errors";
import { ValidateUserDto } from "../../domain/dtos/validate-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

interface UserToken {
  token: string,
  user: UserEntity
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>

interface ValidateUserUseCase {
  execute(validateUserDto: ValidateUserDto): Promise<UserToken>
}

export class ValidateUser implements ValidateUserUseCase {

  constructor(
    private readonly userRepository: UserRepository,
    private readonly signToken: SignToken,
    private readonly durationToken: string
  ) { }

  async execute(validateUserDto: ValidateUserDto): Promise<UserToken> {
    const user = await this.userRepository.validateUser(validateUserDto);

    const payload: TokenPayload = {
      id: user.user_id,
      email: user.email,
      roles: user.roles
    }

    const token = await this.signToken(payload, this.durationToken);
    if (!token) throw CustomError.internalServer("Error generating token")

    return {
      token,
      user: user
    }
  }

}
