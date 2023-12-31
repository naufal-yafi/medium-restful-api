import slugify from "slugify";
import { prisma } from "../app/database.js";
import { createCategory } from "../validations/CategoryValidation.js";
import validation from "../validations/validation.js";

const postCategory = async (request) => {
  const category = validation(createCategory, request);

  return await prisma.category.create({
    data: {
      slug: slugify(category.name).toLocaleLowerCase(),
      name: category.name,
    },
    select: {
      slug: true,
      name: true,
    },
  });
};

export default { postCategory };
