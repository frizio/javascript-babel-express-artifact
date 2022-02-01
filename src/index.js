import { PORT } from "./config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.listen(PORT);

console.log(`Server on port http://localhost:${PORT}`);
