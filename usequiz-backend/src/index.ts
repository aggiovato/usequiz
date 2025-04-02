import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import questionRoutes from "./routes/questionRoutes";
import connectDB from "./db";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static/home.html"));
});

app.use("/api/questions", questionRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
