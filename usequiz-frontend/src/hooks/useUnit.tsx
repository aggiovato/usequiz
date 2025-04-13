import { useNavigate, useParams } from "react-router-dom";
import useUnitStore from "../stores/useUnitStore";
import { UnitType } from "../types/types";

const useUnit = () => {
  const navigate = useNavigate();
  const { subject } = useParams();

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
