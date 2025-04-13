import {
  getAllQuestions,
  getQuestionsBySubject,
  getQuestionsBySubjectUnit,
} from "../services/questionService";

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
    return getAllQuestions();
  }

  if (pathname.includes("/subjects/") && pathname.endsWith("/questions")) {
    if (params.unit) {
      return getQuestionsBySubjectUnit(params);
    } else {
      return getQuestionsBySubject(params);
    }
  }

  return [];
};
