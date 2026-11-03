import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from '@clerk/express'
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors";

import { initilizeSocket } from "./lib/socket.js";

import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import songRoutes from "./routes/songs.route.js";
import statsRoutes from "./routes/stat.route.js";
import albumRoutes from "./routes/album.route.js";
import { createServer } from "http";

dotenv.config();
console.log("Clerk secret exists:", !!process.env.CLERK_SECRET_KEY);
console.log(
    "Clerk secret prefix:",
    process.env.CLERK_SECRET_KEY?.slice(0, 8)
);
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());

const httpServer = createServer(app);
initilizeSocket(httpServer)

app.use(cors());
app.use(clerkMiddleware());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, "tmp"),
  createParentPath: true,
  limits: { fileSize: 10 * 1024 * 1024 }, //10 MB limit
}));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoutes);

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, 
                         message: process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message 
                      });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});