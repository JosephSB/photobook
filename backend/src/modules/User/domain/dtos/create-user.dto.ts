import { isEmail } from "../../../../utils/validate.util";

export class CreateUserDto {
  private constructor(
    public email: string,
    public password: string,
    public name: string,
    public lastname: string,
    public about: string | null,
    public photo_id: string | null,
  ) { }

  static create(object: { [key: string]: any }): [string?, CreateUserDto?] {

    const { email, password, name, lastname, about, photo_id } = object;

    try {
      if (!email) return ["Missing email"]
      if(!isEmail(email)) return ["Invalid email"]
      if(!name) return ["Missing name"]
      if(!lastname) return ["Missing lastname"]
      if(about && (about.length < 3)) return ["Invalid about"]
      if(photo_id && (photo_id.length < 3)) return ["Invalid photo_id"]

      return [undefined, new CreateUserDto(
        email, password, name, lastname, about, photo_id
      )];
    } catch (error) {
      return ["Unknown Error validating data of create-user body"]
    }
  }
}
