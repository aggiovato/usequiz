import { Router } from "express";
import { getSubjects, getUnits } from "../controllers/subjectController";

const router = Router();

router.get("/", getSubjects);
router.get("/:subject/units", getUnits);

export default router;
