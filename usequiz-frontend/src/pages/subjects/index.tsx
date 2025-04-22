import SubjectCard from "./SubjectCard";
import useSubject from "../../hooks/useSubject";
import { SubjectType } from "../../types/types";

const Subjects = () => {
  const { subjects, lettersMap } = useSubject();
  // I no longer use useLoaderData in order to have
  // a single source of truth for the subjects

  return (
    <div className="page-container p-8">
      {/*  {isRefreshing && (
        <p className="text-sm text-gray-400 mb-4 animate-pulse">
          🔄 Refrescando datos…
        </p>
      )} */}

      {subjects.map((subject: SubjectType) => (
        <SubjectCard
          key={subject.subject}
          subject={subject}
          svg={lettersMap[subject.subject]}
        />
      ))}
    </div>
  );
};

export default Subjects;
