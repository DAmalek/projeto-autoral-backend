import joi from "joi";
import { Response, Request, NextFunction } from "express";
import { ApplicationError } from "../protocols/error.protocol";
import httpStatus from "http-status";

export function schemaValidation(schema: joi.ObjectSchema) {
  return (
    err: ApplicationError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((details) => details.message);
      return res.status(httpStatus.CONFLICT).send(errors);
    }
  };
}
