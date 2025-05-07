import { Request, Response, NextFunction } from "express";

type ControllerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any> | any;

const ctrlWrapper = (controller: ControllerFunction): ControllerFunction => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default ctrlWrapper;
