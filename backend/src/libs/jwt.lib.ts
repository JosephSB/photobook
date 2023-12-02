import jwt from "jsonwebtoken";
import config from "../config";

export class JwtAdapter {

  static async generateToken(
    payload: Object,
    duration: string = "2h"
  ): Promise<string | null> {

    return new Promise((resolve, reject) => {
      jwt.sign(payload, config.JWT_SEED, { expiresIn: duration }, (error, token) => {
        if (error) return resolve(null)
        resolve(token!)
      })
    })
  }

  static async validateToken<T>(
    token: string
  ): Promise<T | null> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, config.JWT_SEED, (error, decoded) => {
        if (error) return resolve(null);
        resolve(decoded as T)
      })
    })
  }

}
