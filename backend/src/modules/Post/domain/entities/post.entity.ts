import { UserEntity } from "../../../User/domain/entities/user.entity";
import { MediaEntity } from "./media.entity";

export class PostEntity {
  constructor(
    public post_id: number,
    public description: string | null,
    public privacy: number,
    public isActive: boolean,
    public user: UserEntity,
    public gallery: MediaEntity[],
    public date: string
  ) { }
}
