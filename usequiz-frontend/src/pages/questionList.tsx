import { useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import useQuestions from "../hooks/useQuestions";

import { QuestionType, RouteParamsType } from "../types/types";

interface QuestionListProps<T extends RouteParamsType> {
  fetchFn: (params: T) => Promise<QuestionType[]>;
}

const QuestionList = ({ fetchFn }: QuestionListProps<RouteParamsType>) => {
  const params = useParams();
  const { questions, revealMode, setRevealMode } = useQuestions({
    fetchFn,
    params,
  });

  return (
    <>
      <div className="unit">
        <h2>{`${params.subject}  >>>  ${
          params.unit ? params.unit : "All Units"
        }`}</h2>

        <button
          onClick={() => {
            setRevealMode(!revealMode);
            console.log(revealMode);
          }}
        >
          Reveal mode
        </button>
      </div>
      {questions.map((question, index) => {
        return (
          <div key={`${question.id}-${index}`}>
            {index !== 0 && <hr key={`${question.id} - line`} />}
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              isRevealMode={revealMode}
            />
          </div>
        );
      })}
    </>
  );
};

export default QuestionList;
