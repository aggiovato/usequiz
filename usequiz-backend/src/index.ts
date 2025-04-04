import express from "express";
import path from "path";
import cors from "cors";
import questionRoutes from "./routes/questionRoutes";
import subjectRoutes from "./routes/subjectRouter";
import { notFound } from "./middlewares/notFound";
import connectDB from "./db";
import { PORT } from "./config/config";

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static/home.html"));
});
app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "static/logo.svg"));
});

app.use("/api/questions", questionRoutes);
app.use("/api/subjects", subjectRoutes);

app.use(notFound);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
