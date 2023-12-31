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

export default { createNewCategory };
