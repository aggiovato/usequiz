import { Router } from "express";
import {
  getSubjects,
  getUnits,
  getQuestionsBySubjectUnit,
} from "../controllers/subjectController";

const router = Router();

router.get("/", getSubjects);
router.get("/:subject/units", getUnits);
router.get("/:subject/units/:unit/questions", getQuestionsBySubjectUnit);

export default router;
