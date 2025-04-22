import { useNavigate, useParams } from "react-router-dom";
import useUnitStore from "../stores/useUnitStore";
import { UnitType } from "../types/types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getUnits } from "../services/questionService";
import { getLetter } from "../services/letterService";

const useUnit = () => {
  const navigate = useNavigate();
  const { subject } = useParams();

  const {
    units,
    lettersMap,
    isLoading,
    currentSubject,
    setUnits,
    setLettersMap,
    setIsLoading,
    setCurrentSubject,
  } = useUnitStore();

  // useEffect to update the store on mount after the data has been already loaded
  useEffect(() => {
    const fetchUnits = async () => {
      try {
        if (currentSubject === subject && units.length > 0) {
          // The units are already loaded and the subject is the same
          return;
        }

        setIsLoading(true);
        const freshUnits = await getUnits(subject as string);

        const lettersResponse = await Promise.all(
          freshUnits.map(async (unit: UnitType) => {
            const firstLetter = unit.title[0].toUpperCase();
            const letterData: string = await getLetter(firstLetter);
            return { unit, svg: letterData };
          })
        );

        const freshMap: Record<string, string> = {};
        lettersResponse.forEach(({ unit, svg }) => {
          freshMap[unit.title] = svg;
        });

        setUnits(freshUnits);
        setLettersMap(freshMap);
        setCurrentSubject(subject as string);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUnits();
  }, [subject]); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect to update the language on change
  const { i18n } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  const handleSeeAllQuestions = () => {
    navigate(`/subjects/${subject}/questions`);
  };

  return {
    subject,
    units,
    lettersMap,
    isLoading,
    currentSubject,
    handleSeeAllQuestions,
  };
};

export default useUnit;
