import { Router } from "express";
import {
  createQuestion,
  getQuestions,
} from "../controllers/questionController";

const router = Router();

router.post("/", createQuestion);
router.get("/", getQuestions);

export default router;
