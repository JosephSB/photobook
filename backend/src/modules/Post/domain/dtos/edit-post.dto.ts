export class EditPostDto {
  private constructor(
    public post_id: number,
    public description?: string,
    public privacy?: number,
    public isActive?: boolean
  ) { }

  static create(object: { [key: string]: any }): [string?, EditPostDto?] {

    const { post_id, description, privacy, isActive = false } = object;

    try {
      if(!post_id) return ["Missing post_id"]
      if (description && description.length < 5) return ["Description too short"]
      if (privacy && (privacy !== 1 || privacy !== 2)) return ["Invalid privacy"]

      return [undefined, new EditPostDto(
        post_id, description, privacy, isActive
      )];
    } catch (error) {
      return ["Unknown Error validating data of create-post body"]
    }
  }
}
