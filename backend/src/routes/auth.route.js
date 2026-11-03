import { Router } from "express";
import { authCallback } from "../controller/auth.controller.js";

const authRoutes = Router();

// authRoutes.get("/", (req, res) => {
//   res.send("Auth route");
// });

authRoutes.post("/callback", authCallback);

export default authRoutes;