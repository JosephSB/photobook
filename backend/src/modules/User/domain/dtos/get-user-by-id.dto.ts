export class GetUserByIDDto {
  private constructor(
    public user_id: string,
  ) { }

  static create(object: { [key: string]: any }): [string?, GetUserByIDDto?] {

    const { user_id } = object;

    try {
      if (!user_id) return ["Missing email"]

      return [undefined, new GetUserByIDDto(
        user_id
      )];
    } catch (error) {
      return ["Unknown Error validating data of get-user-by-id body"]
    }
  }
}
