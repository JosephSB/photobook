import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../libs";
import { TokenPayload } from "../../modules/Auth/interfaces/TokenPayload.interface";


export class AuthMiddleware {

  static validateJwt = async (req: Request, res: Response, next: NextFunction) => {

    const authorization = req.header("Authorization");

    if (!authorization) return res.status(401).json({ error: "No token provided" })

    if (!authorization.startsWith("Bearer")) return res.status(401).json({ error: "Invalid Bearer token" })

    const token = authorization.split(" ").at(1) || "";

    try {
      const payload = await JwtAdapter.validateToken<TokenPayload>(token);
      if (!payload) return res.status(401).json({ error: "Invalid token" })

      req.body.user = payload

      next();
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: "Internal Server error" })
    }
  }

}
