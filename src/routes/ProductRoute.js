import express from "express";
import ProductController from "../controllers/ProductController.js";

const ProductRoute = express.Router();

ProductRoute.post("/products", ProductController.createNewProduct);

export default ProductRoute;
