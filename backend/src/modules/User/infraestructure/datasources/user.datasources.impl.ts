import { CustomError } from "../../../Error/custom-errors";
import { UserDatasource } from "../../domain/datasources/user.datasource";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";

export class UserDatasourceImpl implements UserDatasource {

  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      throw new Error("method not implement")
    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer();
    }
  }

}
