import express from "express";
import ProductController from "../controllers/ProductController.js";

const ProductRoute = express.Router();

ProductRoute.post("/products", ProductController.createNewProduct);
ProductRoute.get("/products", ProductController.getAllProduct);
ProductRoute.get("/products/:slug", ProductController.getSpecificProduct);
ProductRoute.patch(
  "/products/:slug",
  ProductController.updateDescriptionProduct
);

export default ProductRoute;
