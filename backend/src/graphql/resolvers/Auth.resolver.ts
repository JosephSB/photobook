import { CreateUser } from "../../modules/User/application/use-cases/create-user.use-case";
import { CreateUserDto } from "../../modules/User/domain/dtos/create-user.dto";
import { UserDatasourceImpl } from "../../modules/User/infraestructure/datasources/user.datasources.impl";
import { UserRepositoryImpl } from "../../modules/User/infraestructure/repositories/user.repository.impl";
import { GqlHandleError } from "../utils/GqlHandleError";

const RegisterUser = async (_: any, args: any, context: any) => {
  try {
    const [error, createUserDto] = CreateUserDto.create(args.dto);
    if(error) return {
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

const AuthResolver = {
  RegisterUser
}

export default AuthResolver
