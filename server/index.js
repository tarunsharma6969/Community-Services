import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import scholarshipRoutes from "./routes/scholarships.js";

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "ScholarConnect API" }));
app.use("/api/auth", authRoutes);
app.use("/api/scholarships", scholarshipRoutes);
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Unexpected server error." });
});

const port = process.env.PORT || 5000;
try {
  if (process.env.MONGO_URI) {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } else {
    console.warn("MONGO_URI missing. Database routes will not work until configured.");
  }
} catch (error) {
  console.error("MongoDB connection failed:", error.message);
}
app.listen(port, () => console.log(`ScholarConnect API listening on http://localhost:${port}`));