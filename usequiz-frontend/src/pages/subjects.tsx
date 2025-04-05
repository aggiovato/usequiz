import { useEffect, useState } from "react";
import { getSubjects } from "../services/questionService";
import { Link } from "react-router-dom";

const Subjects = () => {
  const [subjects, setSubjects] = useState<string[]>([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const subjects = await getSubjects();
      setSubjects(subjects);
    };
    fetchSubjects();
  }, []);

  return (
    <>
      {subjects.map((subject) => {
        return (
          <Link key={subject} to={`/subjects/${subject}`}>
            <h3>{subject}</h3>
          </Link>
        );
      })}
    </>
  );
};

export default Subjects;
