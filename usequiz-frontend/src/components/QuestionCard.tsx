import { useState } from "react";
import { Question } from "../types/questionType";
import _ from "lodash";

const QuestionCard = ({ question }: { question: Question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectionArr, setSelectionArr] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleVerifyAnswer = () => {
    if (selectionArr.length === 0) return alert("Please select an answer");
    setShowAnswer(true);
    setIsCorrect(_.isEqual(_.sortBy(question.answers), _.sortBy(selectionArr)));
    setIsFinished(true);
  };

  const handleSelectionArr = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectionArr((prev) => [...prev, value]);
    } else {
      setSelectionArr((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <>
      <h2>{question.subject}</h2>
      <h3>{question.unit}</h3>
      <p>{question.question}</p>
      <ul>
        {question.options.map((option) => {
          return (
            <li key={option.id}>
              {option.text}
              <input
                type="checkbox"
                value={option.id}
                onChange={handleSelectionArr}
                disabled={isFinished}
              />
            </li>
          );
        })}
      </ul>

      {showAnswer &&
        (isCorrect ? (
          <>
            <p>Correct!</p>
            <p>The correct answer is: {question.answers.join(", ")}</p>
          </>
        ) : (
          <>
            <p>Incorrect!</p>
            <p>The correct answer is: {question.answers.join(", ")}</p>
            <p>And you selected: {selectionArr.join(", ")}</p>
          </>
        ))}

      <button onClick={handleVerifyAnswer} disabled={isFinished}>
        Verify answer
      </button>
    </>
  );
};

export default QuestionCard;
