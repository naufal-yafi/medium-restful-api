import Joi from "joi";

const createCategory = Joi.object({
  slug: Joi.string().min(4).max(191).required(),
  name: Joi.string().min(4).max(30).required(),
});

export { createCategory };
