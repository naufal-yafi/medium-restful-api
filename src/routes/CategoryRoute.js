import express from "express";
import CategoryController from "../controllers/CategoryController.js";

const CategoryRoute = express.Router();

CategoryRoute.post("/categories", CategoryController.createNewCategory);
CategoryRoute.get("/categories", CategoryController.getAllCategory);
CategoryRoute.get(
  "/categories/:slug/products",
  CategoryController.getSpesificCategory
);

export default CategoryRoute;
