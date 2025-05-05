import { Request, Response } from "express";
import Question from "../models/Question";

// Create a new question
export const createQuestion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let options = req.body.options ?? [];

    options = options.map(
      (opt: { id?: string; text: string }, index: number) => ({
        id: opt.id ?? String.fromCharCode(97 + index), // 'a', 'b', 'c'...
        text: opt.text,
      })
    );

    const newQuestion = new Question({
      ...req.body,
      options,
    });

    const saved = await newQuestion.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error creating question:", error);
    res.status(400).json({
      error: "Error creating question",
      details: error instanceof Error ? error.message : error,
    });
  }
};

// Get all questions
export const getQuestions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const question = await Question.find();
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: "Error getting questions", details: error });
  }
};

// Get a question by id
export const getQuestionById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      res.status(404).json({ error: "Question not found" });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: "Error getting question", details: error });
  }
};

// Update a question
export const updateQuestion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updated = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      res.status(404).json({ error: "Question not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: "Error updating question", details: error });
  }
};

// Delete a question
export const deleteQuestion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleted = await Question.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ error: "Question not found" });
    }
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error deleting question", details: error });
  }
};
