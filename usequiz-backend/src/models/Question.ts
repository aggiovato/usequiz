import mongoose, { Schema } from "mongoose";

const optionSchema = new Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
});

const questionSchema = new Schema({
  subject: { type: String, required: true },
  unit: { type: String, required: true },
  question: { type: String, required: true },
  options: [optionSchema],
  answers: [{ type: String, required: true }],
  explanation: String,
  tags: [String],
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "medium",
  },
});

export default mongoose.model("Question", questionSchema);
