import { Role as RolesModel } from "../../../../db/postgress/models/role.model";
import { User as UserModel } from "../../../../db/postgress/models/user.model";
import { BcryptAdapter } from "../../../../libs";
import { CustomError } from "../../../Error/custom-errors";
import { UserDatasource } from "../../domain/datasources/user.datasource";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { GetUserByIDDto } from "../../domain/dtos/get-user-by-id.dto";
import { ValidateUserDto } from "../../domain/dtos/validate-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserMapper } from "../mappers/user.mapper";

export class UserDatasourceImpl implements UserDatasource {

  async getUserByID(getUserByIDDto: GetUserByIDDto): Promise<UserEntity> {
    const { user_id } = getUserByIDDto;

    try {
      // validate if email is unique
      const user = await UserModel.findOne({ where: { user_id: user_id }, relations: ["roles"] })
      if (!user) throw CustomError.badRequest("User not exists");

      //return mapper
      return UserMapper.userEntityFromObject({
        user_id: user.user_id,
        email: user.email,
        password: user.password,
        roles: user.roles,
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        about: user.about,
        photo_id: user.photo_id
      })
    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer();
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { email, password, name, lastname, about, photo_id } = createUserDto;

    try {
      // validate if email is unique
      const user = await UserModel.findOne({ where: { email: email } })
      if (user) throw CustomError.badRequest("Email already exists");

      //get user role
      const userRole = await RolesModel.findOne({ where: { role_id: 1 } });
      if (!userRole) throw new Error("Role user not found")

      // create username
      const NICKNAME = (name.slice(0, 10) + Date.now()).replace(" ", "");

      // save user
      const newUser = new UserModel();
      newUser.email = email
      newUser.password = BcryptAdapter.hash(password)
      newUser.username = NICKNAME
      newUser.name = name
      newUser.lastname = lastname
      newUser.roles = [userRole]
      if (about) newUser.about = about
      if (photo_id) newUser.photo_id = photo_id

      await newUser.save()

      //return mapper
      return UserMapper.userEntityFromObject({
        user_id: newUser.user_id,
        email: newUser.email,
        password: newUser.password,
        roles: newUser.roles,
        username: newUser.username,
        name: newUser.name,
        lastname: newUser.lastname,
        about: newUser.about,
        photo_id: newUser.photo_id
      })
    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer();
    }
  }

  async validateUser(validateUserDto: ValidateUserDto): Promise<UserEntity> {
    const { email, password } = validateUserDto;

    try {
      const user = await UserModel.findOne({
        where: { email: email },
        relations: ["roles"],
      });
      if (!user) throw CustomError.badRequest("Email invalid");

      if (!BcryptAdapter.compare(password, user.password)) {
        throw CustomError.badRequest("Account invalid");
      }

      //return mapper
      return UserMapper.userEntityFromObject({
        user_id: user.user_id,
        email: user.email,
        password: user.password,
        roles: user.roles,
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        about: user.about,
        photo_id: user.photo_id
      })
    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer();
    }
  }

}
