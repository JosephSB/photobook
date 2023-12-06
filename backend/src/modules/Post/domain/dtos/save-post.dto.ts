export class SavePostDto {
  private constructor(
    public user_id: string,
    public description: string,
    public privacy: number,
    public isActive: boolean
  ) { }

  static create(object: { [key: string]: any }): [string?, SavePostDto?] {

    const { user_id, description, privacy, isActive = false } = object;

    try {
      if (!user_id) return ["Missing user_id"]
      if (description.length < 5) return ["Description too short"]
      if (!privacy) return ["Missing privacy"]
      if (!([1, 2].includes(privacy))) return ["Invalid privacy"]

      return [undefined, new SavePostDto(
        user_id, description, privacy, isActive
      )];
    } catch (error) {
      return ["Unknown Error validating data of create-post body"]
    }
  }
}
