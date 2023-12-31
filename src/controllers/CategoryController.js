import CategoryServise from "../services/CategoryServise.js";

const createNewCategory = async (req, res, next) => {
  try {
    const response = await CategoryServise.postCategory(req.body);

    res.status(201).json({
      message: "Data category telah ditambahkan",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCategory = async (req, res, next) => {
  try {
    const response = await CategoryServise.getCategory();

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const getSpesificCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const response = await CategoryServise.getCategoryBySlug(slug);

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export default { createNewCategory, getAllCategory, getSpesificCategory };
