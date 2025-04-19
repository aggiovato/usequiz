import { usePackStore } from "../../stores/usePackStore";
import { QuestionType } from "../../types/types";
import ReactMarkdown from "react-markdown";

// This is the current question
const QuestionCard = ({ question }: { question: QuestionType }) => {
  const index = usePackStore((state) => state.currentIndex);
  const handleVerifyAnswer = () => {
    console.log("verify answer");
  };
  return (
    <div className="flex flex-col gap-4 h-full justify-between">
      <div className="question-section">
        <h2>
          <span>{index + 1}.</span> Pregunta
        </h2>
        <h3>
          <ReactMarkdown>{question.question}</ReactMarkdown>
        </h3>

        <div className="flex flex-col max-h-3/5 md:max-h-5/7 overflow-y-auto">
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
                <input type="checkbox" name="answer" id={option.id} />
                <label htmlFor={option.id}>
                  <ReactMarkdown>{`*${option.text}*`}</ReactMarkdown>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* This is the answer feedback */}
      <div id="answer-section"></div>
      {/* This is the button for verification and navigation */}
      <div
        id="buttons-section"
        className="flex gap-6 items-center justify-center mb-10"
      >
        <button className="btn btn-ghost">Previous</button>
        <button
          className="btn btn-primary max-w-[170px] w-full "
          onClick={handleVerifyAnswer}
        >
          Verificar
        </button>
        <button className="btn btn-ghost">Next</button>
      </div>
    </div>
  );
};

export default QuestionCard;
