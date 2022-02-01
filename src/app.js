import express from "express";
import cors from "cors";
import morgan from "morgan";
import apiRoutes from "./routes/api.routes";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", apiRoutes);


export default app;
