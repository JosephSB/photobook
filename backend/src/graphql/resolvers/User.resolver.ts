import { GetUserByID } from "../../modules/User/application/use-cases/get-user-by-id.use-case";
import { GetUserByIDDto } from "../../modules/User/domain/dtos/get-user-by-id.dto";
import { UserDatasourceImpl } from "../../modules/User/infraestructure/datasources/user.datasources.impl";
import { UserRepositoryImpl } from "../../modules/User/infraestructure/repositories/user.repository.impl";
import { GqlHandleError } from "../utils/GqlHandleError"
import { GqlvalidateJWT } from "../utils/GqlvalidateJWT"

const Me = async (_: any, args: any, context: any) => {
  try {
    const payload = await GqlvalidateJWT(context.req);

    const [error, getUserByIDDto] = GetUserByIDDto.create({user_id: payload.id});
    if (error) return {
      message: error,
      error: true,
      user: null
    }

    const datasource = new UserDatasourceImpl();
    const authRepository = new UserRepositoryImpl(datasource);

    const user = await new GetUserByID(authRepository).execute(getUserByIDDto!)

    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword
  } catch (error) {
    return GqlHandleError(error)
  }
}

const UserResolver = {
  Me
}

export default UserResolver
