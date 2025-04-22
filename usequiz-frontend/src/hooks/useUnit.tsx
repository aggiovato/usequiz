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
    setUnits,
    setLettersMap,
    setIsLoading,
  } = useUnitStore();

  // useEffect to update the store on mount after the data has been already loaded
  useEffect(() => {
    const fetchUnits = async () => {
      try {
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
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUnits();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { i18n } = useTranslation();

  useEffect(() => {}, [i18n.language]);

  const handleSeeAllQuestions = () => {
    navigate(`/subjects/${subject}/questions`);
  };

  return { subject, units, lettersMap, isLoading, handleSeeAllQuestions };
};

export default useUnit;
