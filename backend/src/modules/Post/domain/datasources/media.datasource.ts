import { SaveMediaDto } from "../dtos/save-media.dto";
import { MediaEntity } from "../entities/media.entity";

export abstract class MediaDatasource {
  abstract saveMedia(saveMediaDto: SaveMediaDto) : Promise<MediaEntity>
}
