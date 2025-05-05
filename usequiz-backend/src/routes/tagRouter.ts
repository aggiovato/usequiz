import { Router } from "express";
import { getAllTags } from "../controllers/tagController";

const router = Router();

router.get("/", getAllTags);

export default router;
