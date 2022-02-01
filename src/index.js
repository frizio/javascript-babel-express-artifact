import { PORT } from "./config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoutes from "./routes/product.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use("/api", productRoutes);

app.listen(PORT);

console.log(`Server on port http://localhost:${PORT}`);
