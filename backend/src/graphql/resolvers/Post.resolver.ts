import { CreatePost as CreatePostUseCase } from "../../modules/Post/application/use-cases/create-post.use-case";
import { EditPost as EditPostUseCase } from "../../modules/Post/application/use-cases/edit-post.use-case";
import { GetPosts as GetPostsUseCase } from "../../modules/Post/application/use-cases/get-posts.use-case";
import { EditPostDto } from "../../modules/Post/domain/dtos/edit-post.dto";
import { GetPostsDto } from "../../modules/Post/domain/dtos/get-posts.dto";
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


const getPosts = async (_: any, args: any, context: any) => {
  try {
    const payload = await GqlvalidateJWT(context.req).catch(e => console.error(e));

    const [error, getPostsDto] = GetPostsDto.create({...args, user_id: payload?.id});
    if (error) return {
      message: error,
      error: true,
      user: null
    }

    const datasource = new PostDatasourceImpl();
    const authRepository = new PostRepositoryImpl(datasource);

    const posts = await new GetPostsUseCase(authRepository).execute(getPostsDto!)
    console.log(posts)
    return {
      message: null,
      error: false,
      posts: posts
    }
  } catch (error) {
    return GqlHandleError(error)
  }
}

const PostResolver = {
  createPost, editPost, getPosts
}

export default PostResolver
