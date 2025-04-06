import { Router } from "express";
import {
  getSubjects,
  getUnits,
  getQuestionsBySubject,
  getQuestionsBySubjectUnit,
} from "../controllers/subjectController";

const router = Router();

router.get("/", getSubjects);
router.get("/:subject/units", getUnits);
router.get("/:subject/units/:unit/questions", getQuestionsBySubjectUnit);
router.get("/:subject/questions", getQuestionsBySubject);

export default router;
