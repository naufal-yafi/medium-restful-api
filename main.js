import { web } from "./src/app/web.js";

const PORT = 5000;

web.listen(PORT, () => {
  console.log(`Server running on... http://localhost:${PORT}`);
});
