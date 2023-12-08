import { MediaDatasource } from "../../domain/datasources/media.datasource";
import { SaveMediaDto } from "../../domain/dtos/save-media.dto";
import { MediaEntity } from "../../domain/entities/media.entity";
import { MediaRepository } from "../../domain/repositories/media.repository";

export class MediaRepositoryImpl implements MediaRepository {
  constructor(
    private readonly mediaDataSource: MediaDatasource
  ) { }

  saveMedia(saveMediaDto: SaveMediaDto): Promise<MediaEntity> {
    return this.mediaDataSource.saveMedia(saveMediaDto);
  }

}
