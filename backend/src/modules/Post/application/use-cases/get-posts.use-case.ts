import { GetPostsDto } from "../../domain/dtos/get-posts.dto";
import { PostEntity } from "../../domain/entities/post.entity";
import { PostRepository } from "../../domain/repositories/post.repository";

interface GetPostsUseCase {
  execute(getPostsDto: GetPostsDto): Promise<PostEntity[]>
}

export class GetPosts implements GetPostsUseCase {

  constructor(
    private readonly postRepository: PostRepository,
  ) { }

  async execute(getPostsDto: GetPostsDto): Promise<PostEntity[]> {
    const posts = await this.postRepository.getPosts(getPostsDto);
    return posts;
  }

}
