import { useQuestionStore } from "../../stores/useQuestionStore";
import { QuestionType } from "../../types/types";
import QuestionCard from "./QuestionCard";
import ReadyCard from "./ReadyCard";

const QuestionView = () => {
  const currentQ = useQuestionStore<QuestionType | null>(
    (state) => state.currentQ
  );
  return (
    <div className="bg-teal-strong/10 w-full p-6 rounded-md h-full">
      {currentQ ? <QuestionCard question={currentQ} /> : <ReadyCard />}
    </div>
  );
};

export default QuestionView;
