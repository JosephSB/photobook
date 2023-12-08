import config from "../../../../config";
import { CustomError } from "../../../Error/custom-errors";
import { IFile } from "../../domain/interfaces/file.interface";
import { StorageStrategy } from "../../domain/storage/storage.strategy";
const { Storage } = require("@google-cloud/storage");
const short = require('short-uuid');

const projectId = config.GCP.PROJECT_ID; // Get this from Google Cloud
const keyFilename = config.GCP.ACCOUNT_CREDENTIALS; // Get this from Google Cloud -> Credentials -> Service Accounts
const storage = new Storage({
  projectId,
  keyFilename,
});
const bucket = storage.bucket(config.GCP.BUCKET_NAME);

export class GcpStorageStrategyImpl implements StorageStrategy {

  async uploadMedia(file: IFile): Promise<string> {
    try {
      const ID = short.generate();
      const fileName = `photos/${ID}.jpg`;

      const blob = bucket.file(fileName);
      const blobStream = blob.createWriteStream();

      await (new Promise((res, rej) => {
        blobStream.on("finish", () => {
          console.log("NEW PHOTO UPLOADED: ", ID)
          res(ID)
        });

        blobStream.on("error", (err: any) => {
          console.error("ERROR UPLOADING PHOTO: ", ID)
          rej(err)
        });

        blobStream.end(file.buffer);
      }))

      return ID;
    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer();
    }
  }

}
