import mongoose, { Schema } from "mongoose";

const unitSchema = new Schema(
  {
    order: { type: Number, required: true },
    title: { type: String, required: true },
  },
  { _id: false }
);

const optionSchema = new Schema(
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
  },
  { _id: false }
);

const questionSchema = new Schema(
  {
    subject: { type: String, required: true },
    unit: unitSchema,
    question: { type: String, required: true },
    code: { type: String, required: false },
    options: [optionSchema],
    answers: [{ type: String, required: true }],
    explanation: String,
    tags: [String],
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model("Question", questionSchema);
