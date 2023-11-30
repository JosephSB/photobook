import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import config from "../config";

export function logErrors (err: Error, req: Request, res: Response, next: NextFunction) {
  if (config.ENV === "dev") {
    console.error(err);
  }
  next(err);
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

export function boomErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}
/*
export function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err);
}
*/
