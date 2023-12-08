export class SaveMediaDto {
  private constructor(
    public user_id: string,
    public post_id: number,
    public type_media: number,
    public media_id: string,
    public order?: number
  ) { }

  static create(object: { [key: string]: any }): [string?, SaveMediaDto?] {

    const { user_id, post_id, media_id, type_media, order} = object;

    try {
      if (!user_id) return ["Missing user_id"]
      if (!post_id) return ["Missing post_id"]
      if (!media_id) return ["Missing  media_id"]
      if (!type_media) return ["Missing type_media"]
      if (!([1, 2].includes(type_media))) return ["Invalid type_media"]
      if(order && !(order >= 0 && order <= 7)) return ["Invalid order"]

      return [undefined, new SaveMediaDto(
        user_id, post_id, type_media, media_id, order
      )];
    } catch (error) {
      return ["Unknown Error validating data of upload-media body"]
    }
  }
}
