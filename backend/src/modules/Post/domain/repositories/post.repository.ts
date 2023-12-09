import { EditPostDto } from "../dtos/edit-post.dto";
import { GetPostsDto } from "../dtos/get-posts.dto";
import { SavePostDto } from "../dtos/save-post.dto";
import { PostEntity } from "../entities/post.entity";

export abstract class PostRepository {
  abstract savePost(createPostDto: SavePostDto) : Promise<PostEntity>
  abstract editPost(editPostDto: EditPostDto) : Promise<PostEntity>
  abstract getPosts(getPostsDto: GetPostsDto) : Promise<PostEntity[]>
}
