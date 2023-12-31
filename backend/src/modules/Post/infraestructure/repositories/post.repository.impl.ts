import { PostDatasource } from "../../domain/datasources/post.datasources";
import { EditPostDto } from "../../domain/dtos/edit-post.dto";
import { GetPostsDto } from "../../domain/dtos/get-posts.dto";
import { SavePostDto } from "../../domain/dtos/save-post.dto";
import { PostEntity } from "../../domain/entities/post.entity";
import { PostRepository } from "../../domain/repositories/post.repository";

export class PostRepositoryImpl implements PostRepository {
  constructor(
    private readonly postDataSource: PostDatasource
  ) { }

  getPosts(getPostsDto: GetPostsDto): Promise<PostEntity[]> {
    return this.postDataSource.getPosts(getPostsDto);
  }
  savePost(createPostDto: SavePostDto): Promise<PostEntity> {
    return this.postDataSource.savePost(createPostDto);
  }
  editPost(editPostDto: EditPostDto): Promise<PostEntity> {
    return this.postDataSource.editPost(editPostDto);
  }
}
