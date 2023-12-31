import slugify from "slugify";
import { prisma } from "../app/database.js";
import {
  createProduct,
  updateProduct,
} from "../validations/ProductValidation.js";
import validation from "../validations/validation.js";

const postProduct = async (request) => {
  const product = validation(createProduct, request);

  return await prisma.product.create({
    data: {
      slug: slugify(product.title).toLocaleLowerCase(),
      title: product.title,
      description: product.description,
      category_slug: product.category_slug,
    },
    select: {
      slug: true,
      title: true,
      description: true,
      category_slug: true,
    },
  });
};

const getProduct = async () => {
  return await prisma.product.findMany();
};

const getProductBySlug = async (request) => {
  return await prisma.product.findUnique({
    where: {
      slug: request,
    },
    include: {
      category: true,
    },
  });
};

const patchProduct = async (request, params) => {
  const product = validation(updateProduct, request);

  return await prisma.product.update({
    where: {
      slug: params,
    },
    data: {
      description: product.description,
      updated_at: new Date(),
    },
    select: {
      description: true,
    },
  });
};

export default { postProduct, getProduct, getProductBySlug, patchProduct };
