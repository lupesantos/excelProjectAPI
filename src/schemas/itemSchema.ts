import Joi from "joi";

const itemSchema = Joi.object({
  description: Joi.string().required(),
});

export { itemSchema };