import { QuestionType } from "../types/types";
import _ from "lodash";

export const compareQuestionPacks = (
  loadedQuestions: QuestionType[],
  packQuestions: QuestionType[]
) => {
  return _.isEqual(_.sortBy(loadedQuestions), _.sortBy(packQuestions));
};
