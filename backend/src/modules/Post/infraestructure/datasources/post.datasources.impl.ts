import { CustomError } from "../../../Error/custom-errors";
import { PostDatasource } from "../../domain/datasources/post.datasources";
import { EditPostDto } from "../../domain/dtos/edit-post.dto";
import { SavePostDto } from "../../domain/dtos/save-post.dto";
import { PostEntity } from "../../domain/entities/post.entity";
import { Post as PostModel } from "../../../../db/postgress/models/post.model";
import { User as UserModel } from "../../../../db/postgress/models/user.model";
import { PostMapper } from "../mappers/post.mapper";

export class PostDatasourceImpl implements PostDatasource {
  async savePost(savePostDto: SavePostDto): Promise<PostEntity> {
    const { user_id, description, privacy, isActive } = savePostDto;

    try {
      const user = await UserModel.findOne({ where: { user_id: user_id }, relations: ["roles"] })
      if (!user) throw CustomError.badRequest("User not exists");

      const newPost = new PostModel();
      newPost.user = user
      newPost.description = description;
      newPost.post_privacy = privacy;
      newPost.isActive = isActive;
      await newPost.save();

      return PostMapper.postEntityFromObject({
        post_id: newPost.post_id,
        description: newPost.description,
        privacy: newPost.post_privacy,
        isActive: newPost.isActive,
        user: user,
        gallery: newPost.gallery || [],
        date: newPost.updatedAt ? newPost.updatedAt : newPost.createdAt
      })
    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer();
    }
  }

  async editPost(editPostDto: EditPostDto): Promise<PostEntity> {
    const { post_id, description, privacy, isActive } = editPostDto;

    try {
      // validate if post own user

      const post = await PostModel.findOne({ where: { post_id: post_id /*, user: {user_id: } */}, relations: ["user", "user.roles", "gallery"] })
      if (!post) throw CustomError.badRequest("Post not exists");

      if (description) post.description = description
      if (privacy) post.post_privacy = privacy
      if (isActive !== null && isActive !== undefined) post.isActive = isActive

      await post.save();

      return PostMapper.postEntityFromObject({
        post_id: post.post_id,
        description: post.description,
        privacy: post.post_privacy,
        isActive: post.isActive,
        user: post.user,
        gallery: post.gallery || [],
        date: post.updatedAt ? post.updatedAt : post.createdAt
      })

    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer();
    }
  }

}
