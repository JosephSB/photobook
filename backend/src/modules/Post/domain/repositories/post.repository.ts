import { EditPostDto } from "../dtos/edit-post.dto";
import { SavePostDto } from "../dtos/save-post.dto";
import { PostEntity } from "../entities/post.entity";

export abstract class PostRepository {
  abstract savePost(createPostDto: SavePostDto) : Promise<PostEntity>
  abstract editPost(editPostDto: EditPostDto) : Promise<PostEntity>
}
