import { RoleEntity } from "../../User/domain/entities/role.entity";

export interface TokenPayload {
  id: string,
  email: string,
  roles: RoleEntity[]
}
