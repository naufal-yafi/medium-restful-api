import { ResponseError } from "./ResponseError.js";

const NotFoundError = () => {
  throw new ResponseError(404, "Tidak ditemukan");
};

export default NotFoundError;
