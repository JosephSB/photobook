import { SaveMediaDto } from "../dtos/save-media.dto";
import { MediaEntity } from "../entities/media.entity";

export abstract class MediaRepository {
  abstract saveMedia(saveMediaDto: SaveMediaDto) : Promise<MediaEntity>
}
