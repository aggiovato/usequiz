import { useNavigate, useParams } from "react-router-dom";
import useUnitStore from "../stores/useUnitStore";
import { UnitType } from "../types/types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useUnit = () => {
  const navigate = useNavigate();
  const { subject } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {}, [i18n.language]);

  const units = useUnitStore<UnitType[]>((state) => state.units);
  const lettersMap = useUnitStore<Record<string, string>>(
    (state) => state.lettersMap
  );

  const handleSeeAllQuestions = () => {
    navigate(`/subjects/${subject}/questions`);
  };

  return { subject, units, lettersMap, handleSeeAllQuestions };
};

export default useUnit;
