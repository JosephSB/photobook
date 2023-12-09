export class GetPostsDto {
  private constructor(
    public page: number,
    public size: number,
    public type: number, // 0 all - 1 photo - 2 video
    public user_id?: string,
  ) { }

  static create(object: { [key: string]: any }): [string?, GetPostsDto?] {

    const { page = 1, size = 10, type = 0, user_id} = object;

    try {
      if(page && !(page > 0)) return ["Invalid page"]
      if (size && !(size > 0)) return ["Invalid size"]
      if (type && !([0, 1, 2].includes(type)) ) return ["Invalid type"]

      return [undefined, new GetPostsDto(
        page, size, type, user_id
      )];
    } catch (error) {
      return ["Unknown Error validating data of get-posts body"]
    }
  }
}
