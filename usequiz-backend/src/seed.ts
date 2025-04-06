// This is the massive load of data into the database
// It is not used in the project, but it is a good way to test the database

import { connectDB, closeDB } from "./db";
import questionData from "./utils/data/questionData.json";
import Question from "./models/Question";

const seedData = async () => {
  await connectDB();
  await Question.deleteMany({});

  await Question.insertMany(questionData);

  console.log("Seed data loaded");
  await closeDB();
};

seedData().catch((err) => {
  console.error("Error seeding data", err);
  process.exit(1);
});
