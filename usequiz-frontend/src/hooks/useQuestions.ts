import { useEffect, useState } from "react";
import { QuestionType } from "../types/types";

function useQuestions<T>({
  fetchFn,
  params,
}: {
  fetchFn: (params: T) => Promise<QuestionType[]>;
  params: T;
}) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await fetchFn(params);
      setQuestions(questions);
    };
    fetchQuestions();
  }, []);

  return {
    questions,
  };
}

export default useQuestions;
