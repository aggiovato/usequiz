import app from "./app";
import connectDB from "./db";
import { PORT } from "./config/config";

const isVercel = process.env.VERCEL === "1" || process.env.VERCEL === "true";

connectDB().then(() => {
  if (!isVercel) {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  }
});
