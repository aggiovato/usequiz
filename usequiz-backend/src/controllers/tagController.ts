import { Request, Response } from "express";
import Question from "../models/Question";

// get tags
export const getAllTags = async (req: Request, res: Response) => {
  try {
    const result = await Question.aggregate([
      { $unwind: "$tags" },
      {
        $group: {
          _id: "$tags",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          tag: "$_id",
          count: 1,
          _id: 0,
        },
      },
      { $sort: { count: -1 } },
    ]);

    const tags = result.map((t) => t.tag);
    res.status(200).json(tags);
  } catch (error) {
    res.status(400).json({ error: "Error retrieving tags", details: error });
  }
};
