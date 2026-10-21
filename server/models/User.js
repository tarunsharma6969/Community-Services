import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  state: { type: String, default: "Other" },
  education: { type: String, default: "Undergraduate" }
}, { timestamps: true });

export default mongoose.model("User", userSchema);