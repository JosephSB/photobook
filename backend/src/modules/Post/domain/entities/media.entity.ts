export class MediaEntity {
  constructor(
    public post_gallery_id: number,
    public media_id: string,
    public type_media: number, // 1 photo - 2 video
    public order: number
  ) { }
}
