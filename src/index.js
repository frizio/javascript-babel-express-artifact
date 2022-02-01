import app from "./app";
import {PORT} from './config'

const main = () => {
  app.listen(PORT);
  console.log(`Server on port http://localhost:${PORT}`);
};

main();
