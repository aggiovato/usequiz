import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUnits } from "../services/questionService";

const Units = () => {
  const { subject } = useParams();
  const [units, setUnits] = useState<string[]>([]);

  useEffect(() => {
    const fetchUnits = async () => {
      const units = await getUnits(subject as string);
      setUnits(units);
    };
    fetchUnits();
  }, []);

  return (
    <>
      <h2>{subject}</h2>
      {units.map((unit, index) => {
        return (
          <div key={unit} className="unit">
            <p>Unit {index + 1} - </p>
            {/* {index !== 0 && <hr key={index} />} */}
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
