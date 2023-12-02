import { Request } from "express";
import { JwtAdapter } from "../../libs/jwt.lib";
import { TokenPayload } from "../../modules/Auth/interfaces/TokenPayload.interface";

export async function GqlvalidateJWT(req: Request): Promise<TokenPayload> {
  const authorization = req.header("Authorization");

  if (!authorization) throw new Error("No token provided")

  if (!authorization.startsWith("Bearer")) throw new Error("Invalid Bearer token")

  const token = authorization.split(" ").at(1) || "";

  try {
    const payload = await JwtAdapter.validateToken<TokenPayload>(token);
    if (!payload) throw new Error("Invalid token")

    return payload
  } catch (error) {
    console.error(error)
    throw new Error("Internal Server error")
  }
}
