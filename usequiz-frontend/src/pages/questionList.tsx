import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { getQuestionsBySubjectUnit } from "../services/questionService";

const QuestionList = () => {
  const { subject, unit } = useParams();
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getQuestionsBySubjectUnit(
        subject as string,
        unit as string
      );
      setQuestions(questions);
    };
    fetchQuestions();
  }, []);

  return (
    <>
      {questions.map((question) => {
        return <QuestionCard key={question.id} question={question} />;
      })}
    </>
  );
};

export default QuestionList;
