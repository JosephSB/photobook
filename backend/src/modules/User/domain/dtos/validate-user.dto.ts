import { isEmail } from "../../../../utils/validate.util";

export class ValidateUserDto {
  private constructor(
    public email: string,
    public password: string,
  ) { }

  static create(object: { [key: string]: any }): [string?, ValidateUserDto?] {

    const { email, password } = object;

    try {
      if (!email) return ["Missing email"]
      if(!isEmail(email)) return ["Invalid email"]

      if (!password) return ["Missing password"]


      return [undefined, new ValidateUserDto(
        email, password
      )];
    } catch (error) {
      return ["Unknown Error validating data of validate-user body"]
    }
  }
}
