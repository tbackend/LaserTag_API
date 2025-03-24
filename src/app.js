import express from "express";
import dataRouter from "../src/routes/data.routes.js";

export const app = express();

app.use(express.json());

app.use("/api/v1/data", dataRouter);
