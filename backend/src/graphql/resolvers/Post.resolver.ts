import { CreatePost as CreatePostUseCase } from "../../modules/Post/application/use-cases/create-post.use-case";
import { EditPost as EditPostUseCase } from "../../modules/Post/application/use-cases/edit-post.use-case";
import { EditPostDto } from "../../modules/Post/domain/dtos/edit-post.dto";
import { SavePostDto } from "../../modules/Post/domain/dtos/save-post.dto";
import { PostDatasourceImpl } from "../../modules/Post/infraestructure/datasources/post.datasources.impl";
import { PostRepositoryImpl } from "../../modules/Post/infraestructure/repositories/post.repository.impl";
import { GqlHandleError } from "../utils/GqlHandleError";
import { GqlvalidateJWT } from "../utils/GqlvalidateJWT";

const createPost = async (_: any, args: any, context: any) => {
  try {
    const payload = await GqlvalidateJWT(context.req);

    const [error, savePostDto] = SavePostDto.create({...args.dto, user_id: payload.id});
    if (error) return {
      message: error,
      error: true,
      user: null
    }

    const datasource = new PostDatasourceImpl();
    const authRepository = new PostRepositoryImpl(datasource);

    const post = await new CreatePostUseCase(authRepository).execute(savePostDto!)

    return {
      message: null,
      error: false,
      post: post
    }
  } catch (error) {
    return GqlHandleError(error)
  }
}

const editPost = async (_: any, args: any, context: any) => {
  try {
    const payload = await GqlvalidateJWT(context.req);

    const [error, editPostDto] = EditPostDto.create({...args.dto, user_id: payload.id});
    if (error) return {
      message: error,
      error: true,
      user: null
    }

    const datasource = new PostDatasourceImpl();
    const authRepository = new PostRepositoryImpl(datasource);

    const post = await new EditPostUseCase(authRepository).execute(editPostDto!)

    return {
      message: null,
      error: false,
      post: post
    }
  } catch (error) {
    return GqlHandleError(error)
  }
}

const PostResolver = {
  createPost, editPost
}

export default PostResolver
