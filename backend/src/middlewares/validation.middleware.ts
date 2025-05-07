import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import HttpError from "../helpers/HttpError";

interface ValidationOptions {
  body?: Joi.ObjectSchema;
  params?: Joi.ObjectSchema;
  query?: Joi.ObjectSchema;
}

export const validate = (schema: ValidationOptions) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validationErrors: string[] = [];

    if (schema.body && req.body) {
      const { error } = schema.body.validate(req.body);
      if (error) {
        validationErrors.push(`Body: ${error.message}`);
      }
    }

    if (schema.params && req.params) {
      const { error } = schema.params.validate(req.params);
      if (error) {
        validationErrors.push(`Params: ${error.message}`);
      }
    }

    if (schema.query && req.query) {
      const { error } = schema.query.validate(req.query);
      if (error) {
        validationErrors.push(`Query: ${error.message}`);
      }
    }

    if (validationErrors.length > 0) {
      throw HttpError(400, validationErrors.join(", "));
    }

    return next();
  };
};
