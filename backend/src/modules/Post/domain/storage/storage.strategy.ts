import { IFile } from "../interfaces/file.interface";

export abstract class StorageStrategy {
  abstract uploadMedia(file: IFile) : Promise<string>
}
