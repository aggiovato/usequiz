import { useEffect, useState } from "react";
import { getQuestions } from "./services/questionService";

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
            <h2>{question.subject}</h2>
            <h3>{question.unit}</h3>
            <p>{question.question}</p>
            <ul>
              {question.options.map((option) => {
                return (
                  <li key={option.id}>
                    {option.text}
                    <input type="checkbox" />
                  </li>
                );
              })}
            </ul>
            <p>{question.explanation}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
