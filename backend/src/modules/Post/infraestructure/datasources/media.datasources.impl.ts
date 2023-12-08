import { CustomError } from "../../../Error/custom-errors";
import { MediaDatasource } from "../../domain/datasources/media.datasource";
import { SaveMediaDto } from "../../domain/dtos/save-media.dto";
import { MediaEntity } from "../../domain/entities/media.entity";
import { Post as PostModel } from "../../../../db/postgress/models/post.model";
import { PostGallery as PostGalleryModel } from "../../../../db/postgress/models/post-gallery.model";
import { MediaMapper } from "../mappers/media.mapper";

export class MediaDatasourceImpl implements MediaDatasource {

  async saveMedia(saveMediaDto: SaveMediaDto): Promise<MediaEntity> {
    const { user_id, post_id, media_id, type_media, order } = saveMediaDto;

    try {
      const post = await PostModel.findOne({ where: { post_id: post_id , user: {user_id: user_id}}, relations: ["user", "gallery"] })
      if (!post) throw CustomError.badRequest("Post not exists");


      const newPostGallery = new PostGalleryModel();
      newPostGallery.post = post;
      newPostGallery.media_id = media_id;
      newPostGallery.type_media = type_media;
      newPostGallery.order = order ? order : post.gallery.length + 1;

      await newPostGallery.save();

      return MediaMapper.mediaEntityFromObject(newPostGallery);
    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer();
    }
  }

}
