import { SavePostDto } from "../../domain/dtos/save-post.dto";
import { PostEntity } from "../../domain/entities/post.entity";
import { PostRepository } from "../../domain/repositories/post.repository";

interface CreatePostUseCase {
  execute(savePostDto: SavePostDto): Promise<PostEntity>
}

export class CreatePost implements CreatePostUseCase {

  constructor(
    private readonly postRepository: PostRepository,
  ) { }

  async execute(savePostDto: SavePostDto): Promise<PostEntity> {
    const post = await this.postRepository.savePost(savePostDto);
    return post
  }

}
