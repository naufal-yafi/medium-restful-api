import cors from "cors";
import express from "express";

export const web = express();

web.use(cors());
web.use(express.json());

web.use("", (req, res) =>
  res.json({
    message: "Selamat datang di API saya",
  })
);
