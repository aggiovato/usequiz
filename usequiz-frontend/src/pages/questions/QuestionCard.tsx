import { usePackStore } from "../../stores/usePackStore";
import { QuestionType } from "../../types/types";
import ReactMarkdown from "react-markdown";
import NextIcon from "../../components/icons/NextIcon";
import PrevIcon from "../../components/icons/PrevIcon";
import CDialogWrapper from "../../components/customs/CDialogWrapper";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import _ from "lodash";

// This is the current question
const QuestionCard = ({ question }: { question: QuestionType }) => {
  const [selectionArr, setSelectionArr] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const index = usePackStore((state) => state.currentIndex);
  const total = usePackStore((state) => state.stats.total);
  const stats = usePackStore((state) => state.stats);
  const { nextQuestion, prevQuestion } = usePackStore();

  const { t } = useTranslation();

  useEffect(() => {
    if (!question) return;

    const viewed = stats.viewed.includes(question.id);
    const previousSelection = stats.responses[question.id] || [];
    const wasCorrect = stats.correct.includes(question.id);

    if (viewed) {
      // The question has already been answered
      setSelectionArr(previousSelection);
      setShowAnswer(true);
      setIsCorrect(wasCorrect);
      setIsFinished(true);
    } else {
      // Its a new question, cleans the state
      setSelectionArr([]);
      setShowAnswer(false);
      setIsCorrect(false);
      setIsFinished(false);
    }
  }, [question.id, isFinished]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleVerifyAnswer = () => {
    if (selectionArr.length === 0) {
      setShowAlert(true);
      return;
    }

    const sortedCorrect = _.sortBy(question.answers);
    const sortedUser = _.sortBy(selectionArr);
    const correct = _.isEqual(sortedCorrect, sortedUser);

    setIsCorrect(correct);
    setShowAnswer(true);
    setIsFinished(true);

    usePackStore.getState().verifyAnswer(question.id, correct, selectionArr);
  };

  const handleSelectionArr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectionArr((prev) => [...prev, value]);
    } else {
      setSelectionArr((prev) => prev.filter((val) => val !== value));
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full justify-between">
      {showAlert && (
        <CDialogWrapper type="error">
          <div className="flex flex-col gap-3 mt-4 text-sm text-center">
            <p>{t("dialog.error.selection_error.content")}</p>

            <button
              className="btn btn-primary mt-6 min-w-xs self-center"
              onClick={() => setShowAlert(false)}
            >
              {t("dialog.error.selection_error.ok")}
            </button>
          </div>
        </CDialogWrapper>
      )}
      <div className={`question-section ${isFinished ? "text-gray-700" : ""}`}>
        <h2>
          <span>{index + 1}.</span> {t("questions.question-card.question")}
        </h2>
        <h3>
          <ReactMarkdown>{question.question}</ReactMarkdown>
        </h3>

        <div className="flex flex-col min-h-4/5 max-h-4/5 md:min-h-8/9 md:max-h-8/9 h-full overflow-y-auto custom-scrollbar">
          {question.code && (
            <pre className="min-h-[150px] custom-scrollbar">
              <code>
                <ReactMarkdown>{question.code}</ReactMarkdown>
              </code>
            </pre>
          )}

          <div className="flex flex-col gap-3 my-4">
            {question.options.map((option) => (
              <div key={option.id} className="flex gap-3">
                <input
                  type="checkbox"
                  name="answer"
                  id={option.id}
                  value={option.id}
                  onChange={handleSelectionArr}
                  disabled={showAnswer}
                  checked={selectionArr.includes(option.id)}
                />
                <label htmlFor={option.id}>
                  <ReactMarkdown>{`**${option.id.toUpperCase()})** *${
                    option.text
                  }*`}</ReactMarkdown>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* This is the answer feedback */}
      <div
        id="answer-section"
        className="min-h-[80px] flex flex-col justify-start items-center"
      >
        {showAnswer ? (
          <>
            <div
              className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-xl font-semibold shadow-sm ${
                isCorrect
                  ? "bg-teal-bright/20 text-teal-800"
                  : "bg-rose-clay/20 text-rose-800"
              }`}
            >
              {isCorrect
                ? t("questions.question-card.answer-chip.correct")
                : t("questions.question-card.answer-chip.incorrect")}
            </div>
            <div className="text-gray-700 text-sm mt-3 text-center">
              <Trans
                i18nKey="questions.question-card.right-answer"
                values={{
                  answer: question.answers
                    .map(
                      (answer) =>
                        question.options.find((option) => option.id === answer)
                          ?.text
                    )
                    .join(", "),
                }}
                components={[
                  <></>,
                  <div className="text-teal-bright/80 font-bold italic mt-2 max-w-[40ch] md:max-w-[80ch] w-full truncate overflow-hidden" />,
                ]}
              />
            </div>
          </>
        ) : (
          // Invisible placeholder to preserve space
          <div className="opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xl font-semibold">
              Placeholder
            </div>
            <div className="text-sm mt-1">
              Placeholder
              <div>
                <p className="text-teal-bright/80 font-bold italic mt-2">
                  Placeholder
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* This is the button for verification and navigation */}
      <div
        id="buttons-section"
        className="flex gap-6 items-center justify-center mb-10"
      >
        <button onClick={() => prevQuestion()}>
          <PrevIcon
            isDisabled={index === 0}
            className={`w-10 h-10 ${
              index === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:stroke-amber-glow cursor-pointer"
            }`}
          />
        </button>
        <button
          className="btn btn-primary max-w-[170px] w-full "
          onClick={handleVerifyAnswer}
          disabled={isFinished}
        >
          {t("questions.question-card.verify")}
        </button>
        <button onClick={() => nextQuestion()}>
          <NextIcon
            isDisabled={index === total - 1}
            className={`w-10 h-10  ${
              index === total - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:stroke-amber-glow cursor-pointer"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
