import { QuestionType } from "../../types/types";

const QuestionCard = ({ question }: { question: QuestionType }) => {
  return (
    <div className="card-details">
      <span>{question.subject}</span>
      <span>{question.unit.title}</span>
      <span>{question.question}</span>
    </div>
  );
};

export default QuestionCard;
