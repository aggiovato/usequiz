import app from "./app";
import connectDB from "./db";

let connected = false;

connectDB().then(() => {
  connected = true;
});

export default app;
