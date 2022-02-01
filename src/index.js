import { PORT } from "./config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import apiRoutes from "./routes/api.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use("/api", apiRoutes);

app.listen(PORT);

console.log(`Server on port http://localhost:${PORT}`);
