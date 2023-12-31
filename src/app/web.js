import cors from "cors";
import express from "express";
import ErrorMiddleware from "../middlewares/ErrorMiddleware.js";

export const web = express();

web.use(cors());
web.use(express.json());
web.use(ErrorMiddleware);

web.use("", (req, res) =>
  res.json({
    message: "Selamat datang di API saya",
  })
);
