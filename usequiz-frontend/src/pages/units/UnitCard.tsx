import { Link } from "react-router-dom";
import { UnitType } from "../../types/types";

interface UnitCardProps {
  subject: string;
  unit: UnitType;
  svg: string;
}

const UnitCard = ({ subject, unit, svg }: UnitCardProps) => {
  return (
    <Link
      to={`/subjects/${subject}/${unit.title}/questions`}
      className="group relative overflow-hidden p-6 border-3 text-teal-strong border-teal-bright rounded-md  hover:border-teal-shine/70 transition shadow-md hover:shadow-lg min-h-[120px] flex items-center"
    >
      <div className="absolute -top-5 -right-5 w-[150px] h-[150px] rotate-45 -z-10 pointer-events-none select-none bg-teal-shine2/10 rounded-xl transition-all duration-300 group-hover:-top-10 group-hover:rotate-60 group-hover:w-[200px] group-hover:h-[200px]" />

      <div
        className="absolute -top-22 -right-15 w-[250px] h-[300px] rotate-30 opacity-30 -z-10 pointer-events-none select-none [&>svg]:w-full [&>svg]:h-full transition-all duration-300 group-hover:rotate-10 group-hover:opacity-80 group-hover:w-[140px] group-hover:h-[140px] group-hover:-top-3 group-hover:-right-5"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-start">
          <span className="font-extrabold mt-1 text-xl">{unit.order} - </span>
          <h3 className="self-start text-lg font-medium max-w-[25ch] line-clamp-2">
            {unit.title}
          </h3>
        </div>

        <p className="card-details mt-3">
          <span>{unit.questionCount}</span> questions
        </p>
      </div>
    </Link>
  );
};

export default UnitCard;
