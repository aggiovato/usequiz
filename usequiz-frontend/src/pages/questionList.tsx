import { useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import useQuestions from "../hooks/useQuestions";

import { QuestionType, RouteParamsType } from "../types/types";

interface QuestionListProps<T extends RouteParamsType> {
  fetchFn: (params: T) => Promise<QuestionType[]>;
}

const QuestionList = ({ fetchFn }: QuestionListProps<RouteParamsType>) => {
  const params = useParams();
  const { questions } = useQuestions({ fetchFn, params });

  return (
    <>
      <h2>{`${params.subject}  >>>  ${
        params.unit ? params.unit : "All Units"
      }`}</h2>
      {questions.map((question, index) => {
        return (
          <div key={`${question.id}-${index}`}>
            {index !== 0 && <hr key={`${question.id} - line`} />}
            <QuestionCard key={question.id} question={question} index={index} />
          </div>
        );
      })}
    </>
  );
};

export default QuestionList;
