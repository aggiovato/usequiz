import { Router } from "express";
import {
  getAllLetters,
  getAllLettersSVG,
  getLetterSVG,
} from "../controllers/alphabetController";

const router = Router();

router.get("/", getAllLetters);
router.get("/svg", getAllLettersSVG);
router.get("/:letter", getLetterSVG);

export default router;
