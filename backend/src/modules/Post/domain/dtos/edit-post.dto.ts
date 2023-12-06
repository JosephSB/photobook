export class EditPostDto {
  private constructor(
    public user_id: string,
    public post_id: number,
    public description?: string,
    public privacy?: number,
    public isActive?: boolean
  ) { }

  static create(object: { [key: string]: any }): [string?, EditPostDto?] {

    const { user_id, post_id, description, privacy, isActive = false } = object;

    try {
      if (!user_id) return ["Missing user_id"]
      if(!post_id) return ["Missing post_id"]
      if (description && description.length < 5) return ["Description too short"]
      if (privacy && (privacy !== 1 || privacy !== 2)) return ["Invalid privacy"]

      return [undefined, new EditPostDto(
        user_id, post_id, description, privacy, isActive
      )];
    } catch (error) {
      return ["Unknown Error validating data of create-post body"]
    }
  }
}
