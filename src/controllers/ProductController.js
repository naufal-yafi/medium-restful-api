import ProductService from "../services/ProductService.js";

const createNewProduct = async (req, res, next) => {
  try {
    const response = await ProductService.postProduct(req.body);

    res.status(201).json({
      message: "Data produk telah ditambahkan",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export default { createNewProduct };
