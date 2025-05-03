import { connectDB, closeDB } from "./db";
import questionData from "./utils/data/questionData.json";
import Question from "./models/Question";

// Subject TO CHANGE
const TARGET_SUBJECT = "Programación"; // "all" for all subjects

const seedData = async () => {
  await connectDB();

  if (TARGET_SUBJECT.toLowerCase() === "all") {
    await Question.deleteMany({});
    await Question.insertMany(questionData);

    console.log(
      `🌾🌾🌾🌾🌾 SEED DATA COMPLETED for ALL subjects (${questionData.length} questions) 🌾🌾🌾🌾🌾`
    );
  } else {
    // Filter only questions for the specified subject
    const filteredQuestions = questionData.filter(
      (q) => q.subject === TARGET_SUBJECT
    );

    if (filteredQuestions.length === 0) {
      console.log(`❌ No questions found for subject: ${TARGET_SUBJECT}`);
      await closeDB();
      return;
    }

    // Delete all questions for the specified subject
    await Question.deleteMany({ subject: TARGET_SUBJECT });
    // Insert the filtered questions
    await Question.insertMany(filteredQuestions);

    console.log(
      `🌾🌾🌾🌾🌾 SEED DATA COMPLETED for subject "${TARGET_SUBJECT}" (${filteredQuestions.length} questions) 🌾🌾🌾🌾🌾`
    );
  }

  await closeDB();
};

seedData().catch((err) => {
  console.error("❌ Error seeding data", err);
  process.exit(1);
});
