import express from "express";
import cors from "cors";
import dataRouter from "../src/routes/data.routes.js";

export const app = express();

app.use(express.json());
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
    })
);

app.use("/api/v1/data", dataRouter);
