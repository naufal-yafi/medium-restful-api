import { ResponseError } from "../error/ResponseError.js";

const validation = (schema, request) => {
  const result = schema.validate(request);

  if (result.error) {
    throw new ResponseError(400, result.error);
  } else {
    return result.value;
  }
};

export default validation;
