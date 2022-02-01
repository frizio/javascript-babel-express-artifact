import app from "./app";
import { PORT, NODE_ENV, HOST } from './config'

const main = () => {
  app.listen(PORT);
  console.log(`Server ruuning on http://localhost:${PORT}`);
  console.log(`environment: ${NODE_ENV}`);
  console.log(`host: ${HOST}`);
};

main();
