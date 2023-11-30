import { RoleEntity } from "./role.entity";

export class UserEntity {
  constructor(
    public user_id: string,
    public email: string,
    public password: string,
    public roles: RoleEntity[],
    public name: string,
    public lastname: string,
    public about: string | null,
    public username: string,
    public photo_id: string | null,
  ) { }
}
