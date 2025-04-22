import { getLetter } from "../services/letterService";
import { getSubjects } from "../services/questionService";
import useSubjectStore from "../stores/useSubjectStore";
import { SubjectType } from "../types/types";

/******************************************************************************/

export const subjectsLoader = async () => {
  // Check if the subjects are in the zustand store
  const store = useSubjectStore.getState();
  if (store.subjects.length > 0 && Object.keys(store.lettersMap).length > 0) {
    // theres already data so it returns the state to the loader
    return {
      subjects: store.subjects,
      lettersMap: store.lettersMap,
    };
  }

  // if theres not so it fetches the data
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

  store.setSubjects(subjects);
  store.setLettersMap(lettersMap);

  return { subjects, lettersMap };
};
