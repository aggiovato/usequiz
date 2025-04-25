import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { QuestionType } from "../types/types";
import { usePackStore } from "../stores/usePackStore";
import { compareQuestionPacks } from "../utils/compareQuestionPacks";

const useQuestionPack = () => {
  const [isOpenablePack, setIsOpenablePack] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    questions: loadedQuestions,
    route,
    title,
  } = useLoaderData() as {
    questions: QuestionType[];
    route: string;
    title: string;
  };

  const {
    questions: packQuestions,
    stats,
    currentQ,
    currentIndex,
    setTitle,
    setQuestions,
    setCurrentQ,
  } = usePackStore();

  useEffect(() => {
    if (stats.viewed.length === 0) {
      setQuestions(loadedQuestions, route);
      setTitle(title);
      setCurrentQ(null, 0);
      setIsOpenablePack(true);
    } else {
      setIsOpenablePack(compareQuestionPacks(loadedQuestions, packQuestions));
    }

    setIsLoading(false);
  }, [
    title,
    loadedQuestions,
    packQuestions,
    stats.viewed.length,
    route,
    setTitle,
    setQuestions,
    setCurrentQ,
  ]);

  return {
    isLoading,
    isOpenablePack,
    title,
    currentQ,
    loadedQuestions,
    packQuestions,
    setCurrentQ,
    stats,
    currentIndex,
    route,
  };
};

export default useQuestionPack;
