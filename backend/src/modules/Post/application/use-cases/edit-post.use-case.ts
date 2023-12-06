import { EditPostDto } from "../../domain/dtos/edit-post.dto";
import { PostEntity } from "../../domain/entities/post.entity";
import { PostRepository } from "../../domain/repositories/post.repository";

interface EditPostUseCase {
  execute(editPostDto: EditPostDto): Promise<PostEntity>
}

export class EditPost implements EditPostUseCase {

  constructor(
    private readonly postRepository: PostRepository,
  ) { }

  async execute(editPostDto: EditPostDto): Promise<PostEntity> {
    const post = await this.postRepository.editPost(editPostDto);
    return post
  }

}
