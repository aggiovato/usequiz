import { useEffect, useState } from "react";
import { getSubjects } from "../../services/questionService";
import { getLetter } from "../../services/letterService";
import { LetterType } from "../../types/types";
import SubjectCard from "../../components/SubjectCard";

const Subjects = () => {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [letters, setLetters] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchSubjectsAndLetters = async () => {
      try {
        const fetchedSubjects = await getSubjects();
        setSubjects(fetchedSubjects);

        const lettersResponse = await Promise.all(
          fetchedSubjects.map(async (subject: string) => {
            const firstLetter = subject[0].toUpperCase();
            const letterData: LetterType = await getLetter(firstLetter);
            console.log(letterData);
            return { subject, svg: letterData };
          })
        );

        const lettersMap: Record<string, string> = {};
        lettersResponse.forEach(({ subject, svg }) => {
          lettersMap[subject] = svg;
        });

        setLetters(lettersMap);
      } catch (error) {
        console.error("Error fetching subjects or letters:", error);
      }
    };

    fetchSubjectsAndLetters();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {subjects.map((subject) => (
        <SubjectCard key={subject} subject={subject} svg={letters[subject]} />
      ))}
    </div>
  );
};

export default Subjects;
