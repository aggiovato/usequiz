import UnitCard from "./UnitCard";
import useUnit from "../../hooks/useUnit";
import { useTranslation } from "react-i18next";

const Units = () => {
  const { subject, units, lettersMap, handleSeeAllQuestions } = useUnit();

  const { t } = useTranslation();

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
