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
ProductRoute.delete("/products/:slug", ProductController.deletedProduct);

export default ProductRoute;
