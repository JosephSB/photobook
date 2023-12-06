import { CustomError } from "../../../Error/custom-errors";
import { UserMapper } from "../../../User/infraestructure/mappers/user.mapper";
import { MediaEntity } from "../../domain/entities/media.entity";
import { PostEntity } from "../../domain/entities/post.entity";

export class PostMapper {
  static postEntityFromObject(object: { [key: string]: any }) {

    const {
      post_id, description, privacy, isActive,
      gallery, date, user
    } = object;

    if (!post_id) throw CustomError.badRequest('Missing id');
    if (!description) throw CustomError.badRequest('Missing description');
    if (!privacy) throw CustomError.badRequest('Missing privacy');

    if (!user.user_id) throw CustomError.badRequest('Missing user');
    const userEntity = UserMapper.userEntityFromObject(user)
    if (isActive === null || isActive === undefined) throw CustomError.badRequest('Missing isActive');
    if (!Array.isArray(gallery)) throw CustomError.badRequest('Missing gallery');
    if (!date) throw CustomError.badRequest('Missing date');

    return new PostEntity(
      post_id,
      description,
      privacy,
      isActive,
      userEntity,
      gallery.map(gallery => new MediaEntity(gallery.post_gallery_id, gallery.media_id, gallery.type_media , gallery.order)),
      date
    );
  }
}
