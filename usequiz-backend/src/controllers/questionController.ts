import { Request, Response } from "express";
import Question from "../models/Question";

export const createQ = async (req: Request, res: Response) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ error: "Error creating question", details: error });
  }
};

export const getQ = async (req: Request, res: Response) => {
  try {
    const question = await Question.find();
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: "Error getting questions", details: error });
  }
};
