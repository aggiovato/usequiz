import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUnits } from "../../services/questionService";
import UnitCard from "../../components/UnitCard";
import { LetterType } from "../../types/types";
import { getLetter } from "../../services/letterService";

const Units = () => {
  const { subject } = useParams();
  const [units, setUnits] = useState<string[]>([]);
  const [letters, setLetters] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUnitsAndLetters = async () => {
      try {
        if (!subject) return;

        const fetchedUnits = await getUnits(subject);
        setUnits(fetchedUnits);

        const lettersResponse = await Promise.all(
          fetchedUnits.map(async (unit: string) => {
            const firstLetter = unit[0].toUpperCase();
            const letterData: LetterType = await getLetter(firstLetter);
            return { unit, svg: letterData };
          })
        );

        const lettersMap: Record<string, string> = {};
        lettersResponse.forEach(({ unit, svg }) => {
          lettersMap[unit] = svg;
        });

        setLetters(lettersMap);
      } catch (error) {
        console.error("Error fetching units or letters:", error);
      }
    };

    fetchUnitsAndLetters();
  }, [subject]);

  const handleSeeAllQuestions = () => {
    navigate(`/subjects/${subject}/questions`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <button onClick={handleSeeAllQuestions} className="btn btn-primary">
          See all questions
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {units.map((unit) => (
          <UnitCard
            key={unit}
            subject={subject as string}
            unit={unit}
            svg={letters[unit]}
          />
        ))}
      </div>
    </div>
  );
};

export default Units;
