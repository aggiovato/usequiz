import { QuestionType } from "../../types/types";
import { useQuestionStore } from "../../stores/useQuestionStore";
import ReactMarkdown from "react-markdown";

interface QuestionCardProps {
  question: QuestionType;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  const index = useQuestionStore<number>((state) => state.index);

  const handleVerifyAnswer = () => {
    console.log("verify answer");
  };

  return (
    <div className="w-full max-w-[700px] min-h-[500px] flex flex-col justify-between gap-4 bg-light-teal p-6 rounded-md shadow-md">
      {/* This is the question and the options */}

      <div id="question-section" className="question-section">
        <h2>
          <span>{index + 1}. </span> Pregunta
        </h2>
        <h3>
          <ReactMarkdown>{question.question}</ReactMarkdown>
        </h3>

        {question.code && (
          <pre>
            <code>
              <ReactMarkdown>{question.code}</ReactMarkdown>
            </code>
          </pre>
        )}

        <div className="flex flex-col gap-3 my-4">
          {question.options.map((option) => (
            <div key={option.id} className="flex gap-3">
              <input type="radio" name="answer" id={option.id} />
              <label htmlFor={option.id}>
                <ReactMarkdown>{`*${option.text}*`}</ReactMarkdown>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="self-start w-full min-h-2">
        <ReactMarkdown>---</ReactMarkdown>
      </div>

      {/* This is the answer feedback */}
      <div id="answer-section"></div>
      {/* This is the button for verification and navigation */}
      <div id="buttons-section">
        <button className="btn btn-primary" onClick={handleVerifyAnswer}>
          Verificar
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
