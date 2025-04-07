import { Router } from "express";
import {
  createQuestion,
  getQuestions,
} from "../controllers/questionController";

const router = Router();

router.get("/", getQuestions);
router.post("/", createQuestion);

export default router;
