import { Link } from "react-router-dom";

interface SubjectCardProps {
  subject: string;
  svg: string;
}

const SubjectCard = ({ subject, svg }: SubjectCardProps) => {
  return (
    <Link
      to={`/subjects/${subject}`}
      className="relative overflow-hidden p-6 border-2 border-teal-strong rounded-md hover:border-teal-bright transition shadow-md hover:shadow-lg min-h-[120px] flex items-center"
    >
      <div
        className="absolute -top-4 -right-6 w-[130px] h-[150px] rotate-15 opacity-70 -z-10 pointer-events-none select-none [&>svg]:w-full [&>svg]:h-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      <h3 className="text-xl font-semibold text-teal-strong z-10">{subject}</h3>
    </Link>
  );
};

export default SubjectCard;
