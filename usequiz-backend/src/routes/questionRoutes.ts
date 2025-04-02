import { Router } from "express";
import { createQ, getQ } from "../controllers/questionController";

const router = Router();

router.post("/", createQ);
router.get("/", getQ);

export default router;
