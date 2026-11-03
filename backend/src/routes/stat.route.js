import { Router } from "express";
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { getStats } from "../controller/stat.controller.js";

const router = Router();

router.get("/", protectedRoute, requireAdmin, getStats);
// router.get("/", () => {
//     console.log("request received");
// });

export default router;