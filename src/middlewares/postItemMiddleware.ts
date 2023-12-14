import { Request, 
         Response, 
         NextFunction } from "express";
import { itemSchema }   from "../schemas/itemSchema.js"
import   httpStatus     from "http-status";

const postItemMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const {description } = req.body;
    const validate = itemSchema.validate(
      { description },
      { abortEarly: false }
    );
    if (validate.error) {
      const error = validate.error.details.map((detail) => detail.message);
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error);
    }
    next();
  };

  export default postItemMiddleware;