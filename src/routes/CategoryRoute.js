import express from "express";
import CategoryController from "../controllers/CategoryController.js";

const CategoryRoute = express.Router();

CategoryRoute.post("/categories", CategoryController.createNewCategory);

export default CategoryRoute;
