import { useParams } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import ReadyCard from "./ReadyCard";

const QuestionView = () => {
  const { id } = useParams();
  return id ? <QuestionCard id={id} /> : <ReadyCard />;
};

export default QuestionView;
