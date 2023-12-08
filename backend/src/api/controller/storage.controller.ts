import { Request, Response } from "express";
import { CustomError } from "../../modules/Error/custom-errors";
import { SaveMediaDto } from "../../modules/Post/domain/dtos/save-media.dto";
import { MediaDatasourceImpl } from "../../modules/Post/infraestructure/datasources/media.datasources.impl";
import { MediaRepositoryImpl } from "../../modules/Post/infraestructure/repositories/media.repository.impl";
import { UploadMedia as UploadMediaUseCase } from "../../modules/Post/application/use-cases/upload-media.use-case";
import { GcpStorageStrategyImpl } from "../../modules/Post/infraestructure/storage/gcp-storage.strategy.impl";

export const uploadPhotoForPost = async (req: Request, res: Response) => {
  const file = req.file;
  const body = req.body;

  try {

    if (!file) return res.status(400).json({error: "File is required"})

    const [error, saveMediaDto] = SaveMediaDto.create({
      user_id: body.user.id,
      post_id: body.post_id,
      media_id: "x",
      type_media: parseInt(body.type_media)
    });

    if (error) return res.status(400).json({error})

    const datasource = new MediaDatasourceImpl();
    const storage = new GcpStorageStrategyImpl();
    const mediaRepository = new MediaRepositoryImpl(datasource);

    const media = await new UploadMediaUseCase(mediaRepository, storage).execute(saveMediaDto!, { buffer: file.buffer })

    res.status(200).json({
      message: null,
      error: false,
      media: media
    })
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({
        message: error.message
      })
    }
    res.status(500).json({
      message: "Internal Server Error",
      error: true
    })
  }
}
