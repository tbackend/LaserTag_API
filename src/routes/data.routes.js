import { Router } from "express";
import { putData } from "../controllers/data.controller.js";

const router = Router();

router.route("/").post(putData);

export default router;
