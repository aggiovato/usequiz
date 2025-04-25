import {
  getAllQuestions,
  getQuestionsBySubject,
  getQuestionsBySubjectUnit,
} from "../services/questionService";
import { QuestionType } from "../types/types";
import { routeToTitle } from "../utils/routeToTitle";

export const questionsLoader = async ({
  params,
  request,
}: {
  params: Record<string, string | undefined>;
  request: Request;
}): Promise<{ questions: QuestionType[]; route: string; title: string }> => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  let questions: QuestionType[] = [];

  if (pathname === "/questions") {
    questions = await getAllQuestions();
  } else if (
    pathname.includes("/subjects/") &&
    pathname.endsWith("/questions")
  ) {
    if (params.unit) {
      questions = await getQuestionsBySubjectUnit(params);
    } else {
      questions = await getQuestionsBySubject(params);
    }
  }

  const title = routeToTitle(pathname);

  return { questions, route: pathname, title };
};
