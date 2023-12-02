
import { CustomError } from "../../../Error/custom-errors";
import { RoleEntity } from "../../domain/entities/role.entity";
import { UserEntity } from "../../domain/entities/user.entity";

export class UserMapper {
  static userEntityFromObject(object: { [key: string]: any }) {

    const {
      user_id, email, password, username, name, lastname, about,
      photo_id, roles
    } = object;

    if (!user_id) throw CustomError.badRequest('Missing id');
    if (!email) throw CustomError.badRequest('Missing email');
    if (!password) throw CustomError.badRequest('Missing password');

    if (!username) throw CustomError.badRequest('Missing username');
    if (!name) throw CustomError.badRequest('Missing name');
    if (!lastname) throw CustomError.badRequest('Missing lastname');
    if (!Array.isArray(roles)) throw CustomError.badRequest('Missing roles');


    return new UserEntity(
      user_id,
      email,
      password,
      roles.map(role => new RoleEntity(role.role_id, role.name)),
      name,
      lastname,
      about,
      username,
      photo_id
    );
  }
}
