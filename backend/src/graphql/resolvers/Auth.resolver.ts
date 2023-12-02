import config from "../../config";
import { JwtAdapter } from "../../libs/jwt.lib";
import { CreateUser } from "../../modules/User/application/use-cases/create-user.use-case";
import { ValidateUser } from "../../modules/User/application/use-cases/validate-user.use-case";
import { CreateUserDto } from "../../modules/User/domain/dtos/create-user.dto";
import { ValidateUserDto } from "../../modules/User/domain/dtos/validate-user.dto";
import { UserDatasourceImpl } from "../../modules/User/infraestructure/datasources/user.datasources.impl";
import { UserRepositoryImpl } from "../../modules/User/infraestructure/repositories/user.repository.impl";
import { GqlHandleError } from "../utils/GqlHandleError";

const RegisterUser = async (_: any, args: any, context: any) => {
  try {
    const [error, createUserDto] = CreateUserDto.create(args.dto);
    if (error) return {
      message: error,
      error: true,
      user: null
    }

    const datasource = new UserDatasourceImpl();
    const authRepository = new UserRepositoryImpl(datasource);

    const user = await new CreateUser(authRepository).execute(createUserDto!)

    const { password, ...userWithoutPassword } = user;

    return {
      message: null,
      error: false,
      user: userWithoutPassword
    }
  } catch (error) {
    return GqlHandleError(error)
  }
}

const LoginUser = async (_: any, args: any, context: any) => {
  try {
    const [error, validateUserDto] = ValidateUserDto.create(args.dto);
    if (error) return {
      message: error,
      error: true,
      user: null
    }

    const datasource = new UserDatasourceImpl();
    const authRepository = new UserRepositoryImpl(datasource);

    const resp = await new ValidateUser(authRepository, JwtAdapter.generateToken, config.JWT_TOKEN_DURATION).execute(validateUserDto!)


    const { password, ...userWithoutPassword } = resp.user;

    return {
      message: null,
      error: false,
      access_token: resp.token,
      user: userWithoutPassword
    }
  } catch (error) {
    return GqlHandleError(error)
  }
}

const AuthResolver = {
  RegisterUser, LoginUser
}

export default AuthResolver
