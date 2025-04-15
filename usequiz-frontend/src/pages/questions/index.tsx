// this component decides how to fetch the data
import { useQuestionStore } from "../../stores/useQuestionStore";
import { QuestionType } from "../../types/types";
import QuestionView from "./QuestionView";

const Questions = () => {
  const currentQ = useQuestionStore<QuestionType | null>(
    (state) => state.currentQ
  );
  const questions = useQuestionStore<QuestionType[]>(
    (state) => state.questions
  );

  const handleCurrentQ = (q: QuestionType, index: number) => {
    useQuestionStore.getState().setIndex(index);
    useQuestionStore.getState().setCurrentQ(q);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-6 w-full p-6 min-h-[calc(100vh-6.25rem)]">
      <div className="flex flex-col gap-6">
        <QuestionView />
      </div>

      <div className="border-2 border-teal-strong p-4 rounded-md h-fit sticky top-24">
        <h3 className="font-bold mb-4">Questions</h3>
        <div className="grid grid-cols-7 gap-2 wrap-none">
          {questions.map((question, index) => (
            <button
              key={question.id}
              onClick={() => handleCurrentQ(question, index)}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                currentQ?.id === question.id
                  ? "bg-amber-glow text-dark-teal font-bold"
                  : "bg-teal-strong text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
