import { useEffect, useState } from "react";
import { getQuestions } from "./services/questionService";

import QuestionCard from "./components/QuestionCard";

import { Question } from "./types/questionType";

const App = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getQuestions();
      setQuestions(questions);
      console.log(questions);
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <QuestionCard question={question} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
