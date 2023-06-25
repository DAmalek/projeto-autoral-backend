import httpStatus from "http-status";
import { Response, Request, NextFunction } from "express";
import { ApplicationError } from "../protocols/error.protocol";

export function handleApplicationErrors(
  err: ApplicationError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.name === "ConflictError") {
    return res.status(httpStatus.CONFLICT).send({ message: err.message });
  }
}
