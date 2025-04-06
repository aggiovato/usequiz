import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getUnits } from "../services/questionService";

const Units = () => {
  const { subject } = useParams();
  const [units, setUnits] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUnits = async () => {
      const units = await getUnits(subject as string);
      setUnits(units);
    };
    fetchUnits();
  }, []);

  const handleSeeAllQuestions = () => {
    navigate(`/subjects/${subject}/questions`);
  };

  return (
    <>
      <div className="unit">
        <button onClick={handleSeeAllQuestions}>See all questions</button>
      </div>
      {units.map((unit, index) => {
        return (
          <div key={unit} className="unit">
            <p>Unit {index + 1} - </p>
            <Link key={unit} to={`/subjects/${subject}/${unit}/questions`}>
              <h3>{unit}</h3>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Units;
