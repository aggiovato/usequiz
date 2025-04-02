import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import questionRoutes from "./routes/questionRoutes";
import connectDB from "./db";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api/questions", questionRoutes);

// 👇 conectamos la base de datos y arrancamos el servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
