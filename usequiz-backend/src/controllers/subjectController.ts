import { Request, Response } from "express";
import Question from "../models/Question";

/******************************************************************************
 *                     GET Subjects --- Count of questions and units
 ******************************************************************************/
export const getSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await Question.aggregate([
      {
        $group: {
          _id: "$subject",
          questionCount: { $sum: 1 },
          units: { $addToSet: "$unit.title" },
        },
      },
      {
        $project: {
          subject: "$_id",
          questionCount: 1,
          unitCount: { $size: "$units" },
          _id: 0,
        },
      },
      {
        $sort: { subject: 1 },
      },
    ]);

    res.status(200).json(subjects);
  } catch (error) {
    res.status(400).json({ error: "Error getting subjects", details: error });
  }
};

/******************************************************************************
 *                    GET Units --- Count of questions
 ******************************************************************************/
export const getUnits = async (req: Request, res: Response) => {
  try {
    const subject = decodeURIComponent(req.params.subject);

    if (!subject || typeof subject !== "string") {
      res
        .status(400)
        .json({ error: "Missing or invalid 'subject' query parameter" });
    }

    const units = await Question.aggregate([
      { $match: { subject } },
      {
        $group: {
          _id: {
            title: "$unit.title",
            order: "$unit.order",
          },
          questionCount: { $sum: 1 },
        },
      },
      {
        $project: {
          title: "$_id.title",
          order: "$_id.order",
          questionCount: 1,
          _id: 0,
        },
      },
      { $sort: { order: 1 } },
    ]);

    res.status(200).json(units);
  } catch (error) {
    res.status(400).json({ error: "Error getting units", details: error });
  }
};

export const getQuestionsBySubject = async (req: Request, res: Response) => {
  try {
    const { subject } = req.params;
    const decodedSubject = decodeURIComponent(subject);

    if (!decodedSubject) {
      res
        .status(400)
        .json({ error: "Missing or invalid 'subject' query parameter" });
    }

    const questions = await Question.find({ subject: decodedSubject });
    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ error: "Error getting questions", details: error });
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
      "unit.title": decodedUnit,
    });
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: "Error getting question", details: error });
  }
};
