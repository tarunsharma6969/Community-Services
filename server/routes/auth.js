import { Router } from "express";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "../models/User.js";

const router = Router();
const databaseReady = () => mongoose.connection.readyState === 1;

router.post("/register", async (req, res, next) => {
  try {
    if (!databaseReady()) return res.status(503).json({ message: "Database is not connected. Configure MongoDB and restart the server." });
    const { name, email, password, state, education } = req.body || {};
    if (!name?.trim() || !email?.trim() || !password) return res.status(400).json({ message: "Name, email and password are required." });
    if (password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters." });
    const normalizedEmail = email.trim().toLowerCase();
    if (await User.findOne({ email: normalizedEmail })) return res.status(409).json({ message: "An account with this email already exists. Please log in." });
    const passwordHash = await bcrypt.hash(password, 12);
    await User.create({ name: name.trim(), email: normalizedEmail, passwordHash, state, education });
    res.status(201).json({ message: "Account created successfully. You can now log in." });
  } catch (error) { next(error); }
});

router.post("/login", async (req, res, next) => {
  try {
    if (!databaseReady()) return res.status(503).json({ message: "Database is not connected. Configure MongoDB and restart the server." });
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ message: "Email and password are required." });
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) return res.status(401).json({ message: "Incorrect email or password." });
    // Demo response only: this does not issue a session or JWT.
    res.json({ message: "Login successful.", user: { id: user._id, name: user.name, email: user.email, state: user.state, education: user.education } });
  } catch (error) { next(error); }
});

export default router;