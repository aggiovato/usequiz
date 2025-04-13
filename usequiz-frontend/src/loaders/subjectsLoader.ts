import { getLetter } from "../services/letterService";
import { getSubjects } from "../services/questionService";
import useSubjectStore from "../stores/useSubjectStore";
import { SubjectType } from "../types/types";

export const subjectsLoader = async () => {
  const subjects: SubjectType[] = await getSubjects();

  const lettersResponse = await Promise.all(
    subjects.map(async (subject: SubjectType) => {
      const firstLetter = subject.subject[0].toUpperCase();
      const letterData: string = await getLetter(firstLetter);
      return { subject, svg: letterData };
    })
  );

  const lettersMap: Record<string, string> = {};
  lettersResponse.forEach(({ subject, svg }) => {
    lettersMap[subject.subject] = svg;
  });

  useSubjectStore.getState().setSubjects(subjects);
  useSubjectStore.getState().setLettersMap(lettersMap);

  return { subjects, lettersMap };
};
