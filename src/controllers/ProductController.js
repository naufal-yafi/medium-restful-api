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

const getAllProduct = async (req, res, next) => {
  try {
    const response = await ProductService.getProduct();

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const getSpecificProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const response = await ProductService.getProductBySlug(slug);

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const updateDescriptionProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const response = await ProductService.patchProduct(req.body, slug);

    res.status(201).json({
      message: "Deskripsi produk telah diubah",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const deletedProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;

    await ProductService.deleteProduct(slug);

    res.status(204).json({});
  } catch (error) {
    next(error);
  }
};

export default {
  createNewProduct,
  getAllProduct,
  getSpecificProduct,
  updateDescriptionProduct,
  deletedProduct,
};
