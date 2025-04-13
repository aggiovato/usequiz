// this component decides how to fetch the data
import { useLoaderData } from "react-router-dom";
import { QuestionType } from "../../types/types";
import { useParams, Link } from "react-router-dom";
import QuestionView from "./QuestionView";

const Questions = () => {
  const questions = useLoaderData() as QuestionType[];
  const params = useParams();

  return (
    <div>
      <p>You have {questions.length} questions</p>
      {params.unit ? (
        <p>{`for ${params.subject} >>> ${params.unit}`}</p>
      ) : params.subject ? (
        <p>for {params.subject}</p>
      ) : null}

      <div>
        {questions.map((question, index) => (
          <div key={question.id}>
            <Link to={`/questions/${question.id}`}>
              <h3 className="flex flex-row w-10 h-10 border-2 border-teal-strong rounded-md gap-3">
                {index + 1}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      <QuestionView />
    </div>
  );
};

export default Questions;
