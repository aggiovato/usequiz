import { Router } from "express";
import {
  createQuestion,
  getQuestions,
} from "../controllers/questionController";
import { getSubjects, getUnits } from "../controllers/subjectController";

const router = Router();

router.post("/", createQuestion);
router.get("/", getQuestions);

export default router;
