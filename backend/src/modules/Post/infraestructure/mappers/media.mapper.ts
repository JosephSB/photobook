import { CustomError } from "../../../Error/custom-errors";
import { MediaEntity } from "../../domain/entities/media.entity";

export class MediaMapper {
  static mediaEntityFromObject(object: { [key: string]: any }) {

    const {
      post_gallery_id,
      media_id,
      type_media,
      order
    } = object;

    if (!post_gallery_id) throw CustomError.badRequest('Missing post_gallery_id');
    if (!media_id) throw CustomError.badRequest('Missing media_id');
    if (!type_media) throw CustomError.badRequest('Missing type_media');
    if (!order) throw CustomError.badRequest('Missing order');

    return new MediaEntity(
      post_gallery_id,
      media_id,
      type_media,
      order
    );
  }
}
