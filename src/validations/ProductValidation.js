import Joi from "joi";

const createProduct = Joi.object({
  slug: Joi.string().min(8).max(191).required(),
  title: Joi.string().min(8).max(65).required(),
  description: Joi.string().min(15).max(500).required(),
  category_slug: Joi.string().min(4).max(50).required(),
});

export { createProduct };
