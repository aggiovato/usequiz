import express from "express";
import path from "path";
import cors from "cors";
import questionRoutes from "./routes/questionRoutes";
import subjectRoutes from "./routes/subjectRouter";
import alphabetRoutes from "./routes/alphabetRouter";
import { notFound } from "./middlewares/notFound";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://usequiz.vercel.app"],
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static/home.html"));
});
app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "static/logo.svg"));
});

app.use("/api/questions", questionRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/alphabet", alphabetRoutes);

app.use(notFound);

export default app;
