import cors from "cors";
import express from "express";
import ErrorMiddleware from "../middlewares/ErrorMiddleware.js";
import LoggerMiddleware from "../middlewares/LoggerMiddleware.js";
import CategoryRoute from "../routes/CategoryRoute.js";
import ProductRoute from "../routes/ProductRoute.js";
import NotFoundError from "../errors/NotFoundError.js";

export const web = express();

web.use(cors());
web.use(express.json());
web.use(LoggerMiddleware);
web.use(ErrorMiddleware);

web.use(CategoryRoute);
web.use(ProductRoute);

web.use("", () => NotFoundError());
