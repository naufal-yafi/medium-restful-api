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

const getCategory = async () => {
  return await prisma.category.findMany();
};

const getCategoryBySlug = async (request) => {
  return await prisma.category.findUnique({
    where: {
      slug: request,
    },
    include: {
      products: true,
    },
  });
};

export default { postCategory, getCategory, getCategoryBySlug };
