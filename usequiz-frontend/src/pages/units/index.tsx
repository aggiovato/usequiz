import UnitCard from "./UnitCard";
import useUnit from "../../hooks/useUnit";

const Units = () => {
  const { subject, units, lettersMap, handleSeeAllQuestions } = useUnit();

  return (
    <div className="flex flex-col gap-4 p-8">
      <div>
        <button onClick={handleSeeAllQuestions} className="btn btn-primary">
          See all questions
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
