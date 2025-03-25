import { Router } from "express";
import { store } from "../controllers/data.controller.js";

const router = Router();

router.route("/").post(store);
// router.route("/player").get(player);

export default router;
