import { Link } from "react-router-dom";
import { SubjectType } from "../../types/types";
import { Trans } from "react-i18next";

interface SubjectCardProps {
  subject: SubjectType;
  svg: string;
}

const SubjectCard = ({ subject, svg }: SubjectCardProps) => {
  return (
    <Link to={`/subjects/${subject.subject}`} className="card-container group">
      <div className="absolute -top-5 -right-5 w-[150px] h-[150px] rotate-45 -z-10 pointer-events-none select-none bg-teal-shine2/10 rounded-xl transition-all duration-300 group-hover:-top-10 group-hover:rotate-60 group-hover:w-[200px] group-hover:h-[200px]" />
      <div
        className="absolute -top-22 -right-15 w-[250px] h-[300px] rotate-30 opacity-30 -z-10 pointer-events-none select-none [&>svg]:w-full [&>svg]:h-full transition-all duration-300 group-hover:rotate-10 group-hover:opacity-80 group-hover:w-[140px] group-hover:h-[140px] group-hover:-top-3 group-hover:-right-5"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      <div className="flex flex-col gap-2">
        <h3 className="self-start text-xl font-semibold max-w-[25ch] line-clamp-2">
          {subject.subject}
        </h3>

        <p className="card-details mt-3">
          <Trans
            i18nKey="subjects.units"
            count={subject.unitCount}
            components={[<span />]}
          />
        </p>
        <p className="card-details">
          <Trans
            i18nKey="subjects.questions"
            count={subject.questionCount}
            components={[<span />]}
          />
        </p>
      </div>
    </Link>
  );
};

export default SubjectCard;
