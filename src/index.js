import app from "./app";
import { PORT } from './config'
import logger from "./logger";

const main = () => {
  app.listen(PORT);
  logger.info(`Server running on port ${PORT}`);
};

main();