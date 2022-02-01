import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;

export const NODE_ENV = process.env.NODE_ENV || "dev";

export const HOST = (NODE_ENV === "prod") ? process.env.HOST : "http://localhost:" + PORT;
