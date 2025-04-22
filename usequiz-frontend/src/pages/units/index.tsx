import UnitCard from "./UnitCard";
import useUnit from "../../hooks/useUnit";
import CSkeletonCard from "../../components/customs/CSkeletonCard";
import { useTranslation } from "react-i18next";

const Units = () => {
  const { subject, units, lettersMap, handleSeeAllQuestions, isLoading } =
    useUnit();

  const { t } = useTranslation();

  if (isLoading)
    return (
      <div className="flex flex-col gap-4 p-8 justify-center items-center">
        <CSkeletonCard />
      </div>
    );

  return (
    <div className="flex flex-col gap-4 p-8">
      <div>
        <button
          onClick={handleSeeAllQuestions}
          className="btn btn-primary mb-4"
        >
          {t("units.btn")}
        </button>
      </div>

      <div className="page-container">
        {units.map((unit) => (
          <UnitCard
            key={unit.title}
            subject={subject as string}
            unit={unit}
            svg={lettersMap[unit.title]}
          />
        ))}
      </div>
    </div>
  );
};

export default Units;
