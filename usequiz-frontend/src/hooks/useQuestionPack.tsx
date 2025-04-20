import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { QuestionType } from "../types/types";
import { usePackStore } from "../stores/usePackStore";
import { compareQuestionPacks } from "../utils/compareQuestionPacks";

const useQuestionPack = () => {
  const [isOpenablePack, setIsOpenablePack] = useState(false);
  const { questions: loadedQuestions, route } = useLoaderData() as {
    questions: QuestionType[];
    route: string;
  };

  const {
    questions: packQuestions,
    stats,
    currentQ,
    setQuestions,
    setCurrentQ,
  } = usePackStore();

  useEffect(() => {
    if (stats.viewed.length === 0) {
      setQuestions(loadedQuestions, route);
      setCurrentQ(null, 0);
      setIsOpenablePack(true);
    } else {
      setIsOpenablePack(compareQuestionPacks(loadedQuestions, packQuestions));
    }
  }, [
    loadedQuestions,
    packQuestions,
    stats.viewed.length,
    route,
    setQuestions,
    setCurrentQ,
  ]);

  return {
    isOpenablePack,
    currentQ,
    loadedQuestions,
    packQuestions,
    setCurrentQ,
    stats,
    route,
  };
};

export default useQuestionPack;
