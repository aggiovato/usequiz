import { useState } from "react";
import { QuestionType } from "../types/types";
import _ from "lodash";

const QuestionCard = ({
  question,
  index,
  isRevealMode,
}: {
  question: QuestionType;
  index: number;
  isRevealMode: boolean;
}) => {
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
      <div>
        <p>
          {index + 1}. {question.question}
        </p>
        {question.code && (
          <div>
            <pre>
              <code>{question.code}</code>
            </pre>
          </div>
        )}
      </div>
      <ul>
        {question.options.map((option) => {
          return (
            <li key={option.id} className="option">
              <input
                type="checkbox"
                value={option.id}
                onChange={handleSelectionArr}
                disabled={isFinished || isRevealMode}
                checked={
                  isRevealMode
                    ? question.answers.includes(option.id)
                    : selectionArr.includes(option.id)
                }
              />
              {option.text}
            </li>
          );
        })}
      </ul>

      {showAnswer &&
        !isRevealMode &&
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

      {!isRevealMode && (
        <button onClick={handleVerifyAnswer} disabled={isFinished}>
          Verify answer
        </button>
      )}
    </>
  );
};

export default QuestionCard;
