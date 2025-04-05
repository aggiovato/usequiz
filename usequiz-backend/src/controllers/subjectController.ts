import { Request, Response } from "express";
import Question from "../models/Question";

export const getSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await Question.distinct("subject");
    res.status(200).json(subjects.sort());
  } catch (error) {
    res.status(400).json({ error: "Error getting subjects", details: error });
  }
};

export const getUnits = async (req: Request, res: Response) => {
  try {
    const subject = decodeURIComponent(req.params.subject);

    if (!subject || typeof subject !== "string") {
      res
        .status(400)
        .json({ error: "Missing or invalid 'subject' query parameter" });
    }

    const units = await Question.distinct("unit", { subject });
    res.status(200).json(units.sort());
  } catch (error) {
    res.status(400).json({ error: "Error getting units", details: error });
  }
};

export const getQuestionsBySubjectUnit = async (
  req: Request,
  res: Response
) => {
  try {
    const { subject, unit } = req.params;
    const decodedSubject = decodeURIComponent(subject);
    const decodedUnit = decodeURIComponent(unit);

    if (!decodedSubject || !decodedUnit) {
      res.status(400).json({
        error: "Missing or invalid 'subject' or 'unit' query parameter",
      });
    }
    const question = await Question.find({
      subject: decodedSubject,
      unit: decodedUnit,
    });
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: "Error getting question", details: error });
  }
};
