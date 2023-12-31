import Joi from "joi";

const createProduct = Joi.object({
  title: Joi.string().min(8).max(65).required(),
  description: Joi.string().min(15).max(500).required(),
  category_slug: Joi.string().min(4).max(50).required(),
});

const updateProduct = Joi.object({
  description: Joi.string().min(15).max(500).required(),
});

export { createProduct, updateProduct };
