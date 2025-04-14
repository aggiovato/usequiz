import {
  getAllQuestions,
  getQuestionsBySubject,
  getQuestionsBySubjectUnit,
} from "../services/questionService";
import { useQuestionStore } from "../stores/useQuestionStore";
import { QuestionType } from "../types/types";

export const questionsLoader = async ({
  params,
  request,
}: {
  params: Record<string, string | undefined>;
  request: Request;
}): Promise<QuestionType[]> => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname === "/questions") {
    const questions = await getAllQuestions();
    useQuestionStore.getState().setQuestions(questions);
    return questions;
  }

  if (pathname.includes("/subjects/") && pathname.endsWith("/questions")) {
    if (params.unit) {
      const questions = await getQuestionsBySubjectUnit(params);
      useQuestionStore.getState().setQuestions(questions);
      return questions;
    } else {
      const questions = await getQuestionsBySubject(params);
      useQuestionStore.getState().setQuestions(questions);
      return questions;
    }
  }

  return [];
};
