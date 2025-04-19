import CDialogWrapper from "../../components/customs/CDialogWrapper";
import { usePackStore } from "../../stores/usePackStore";
import { useNavigate } from "react-router-dom";
import { QuestionType } from "../../types/types";

const QuestionPackMsg = ({
  loadedQuestions,
  route,
}: {
  loadedQuestions: QuestionType[];
  route: string;
}) => {
  const navigate = useNavigate();

  const {
    questions: packQuestions,
    routeFrom,
    stats,
    setQuestions,
  } = usePackStore();

  const handlePackStart = (questions: QuestionType[], route: string) => {
    if (questions.length === 0) return;
    setQuestions(questions, route);
  };

  return (
    <CDialogWrapper type="warning">
      <div className="flex flex-col gap-3 mt-4 text-sm">
        <p>
          Actualmente tienes un paquete de preguntas activo de{" "}
          <span>{packQuestions.length} preguntas</span>
        </p>

        <h2>Estadísticas:</h2>
        <p className="text-teal-strong/60">
          <span>{stats.viewed.length}</span> vistas
        </p>
        <p className="text-teal-strong/60">
          <span>{stats.correct.length}</span> correctas
        </p>
        <p className="text-teal-strong/60">
          <span>{stats.incorrect.length}</span> incorrectas
        </p>
      </div>

      {/* *************************************************************************** */}

      <p className="text-sm text-dark-teal mt-6 text-center">
        ¿Estás seguro que quieres abandonar el progreso y empezar este nuevo
        paquete?
      </p>

      <div className="flex flex-col gap-2 max-w-[260px] mx-auto items-stretch mt-6">
        <button
          className="btn btn-primary"
          onClick={() => handlePackStart(loadedQuestions, route)}
        >
          Sí, empezar
        </button>
        <button className="btn btn-ghost" onClick={() => navigate(-1)}>
          Regresar
        </button>
        <button className="btn btn-ghost" onClick={() => navigate(routeFrom)}>
          Ver pack actual
        </button>
      </div>
    </CDialogWrapper>
  );
};

export default QuestionPackMsg;
