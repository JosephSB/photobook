import { SaveMediaDto } from "../../domain/dtos/save-media.dto";
import { MediaEntity } from "../../domain/entities/media.entity";
import { IFile } from "../../domain/interfaces/file.interface";
import { MediaRepository } from "../../domain/repositories/media.repository";
import { StorageStrategy } from "../../domain/storage/storage.strategy";

interface UploadMediaUseCase {
  execute(saveMediaDto: SaveMediaDto, file: IFile): Promise<MediaEntity>
}

export class UploadMedia implements UploadMediaUseCase {

  constructor(
    private readonly mediaRepository: MediaRepository,
    private readonly storageStrategy: StorageStrategy,
  ) { }

  async execute(saveMediaDto: SaveMediaDto, file: IFile): Promise<MediaEntity> {
    const media_id = await this.storageStrategy.uploadMedia(file);
    const media = await this.mediaRepository.saveMedia({...saveMediaDto, media_id: media_id});
    return media
  }
}
