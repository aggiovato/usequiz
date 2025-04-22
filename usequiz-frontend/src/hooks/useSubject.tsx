import useSubjectStore from "../stores/useSubjectStore";
import { useEffect } from "react";
import { getSubjects } from "../services/questionService";
import { getLetter } from "../services/letterService";
import { SubjectType } from "../types/types";
import { useTranslation } from "react-i18next";

const useSubject = () => {
  const {
    subjects,
    lettersMap,
    isRefreshing,
    setSubjects,
    setLettersMap,
    setIsRefreshing,
  } = useSubjectStore();

  const shouldFetch = subjects.length === 0;

  // useEffect to update the store on mount after the data has been already loaded
  useEffect(() => {
    if (shouldFetch) return; // if theres no data, it wont run the effect

    const revalidate = async () => {
      try {
        setIsRefreshing(true);
        const freshSubjects = await getSubjects();
        const lettersResponse = await Promise.all(
          freshSubjects.map(async (subject: SubjectType) => {
            const letter = await getLetter(subject.subject[0].toUpperCase());
            return { subject, svg: letter };
          })
        );

        const freshMap: Record<string, string> = {};
        lettersResponse.forEach(({ subject, svg }) => {
          freshMap[subject.subject] = svg;
        });

        setSubjects(freshSubjects);
        setLettersMap(freshMap);
      } catch (err) {
        console.log(err);
      } finally {
        setIsRefreshing(false);
      }
    };

    revalidate();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect to update the language on change
  const { i18n } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  return { subjects, lettersMap, isRefreshing };
};

export default useSubject;
