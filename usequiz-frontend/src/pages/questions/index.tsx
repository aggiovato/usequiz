import { useLoaderData } from "react-router-dom";
import { usePackStore } from "../../stores/usePackStore";
import { QuestionType } from "../../types/types";
import { compareQuestionPacks } from "../../utils/compareQuestionPacks";
import { useNavigate } from "react-router-dom";
import CDialogWrapper from "../../components/customs/CDialogWrapper";

const QuestionPack = () => {
  const navigate = useNavigate();

  const { questions: loadedQuestions, route } = useLoaderData() as {
    questions: QuestionType[];
    route: string;
  };

  const {
    questions: packQuestions,
    stats,
    routeFrom,
    setQuestions,
  } = usePackStore();

  const handlePackStart = (questions: QuestionType[], route: string) => {
    if (questions.length === 0) return;
    setQuestions(questions, route);
  };

  return (
    <main>
      {compareQuestionPacks(loadedQuestions, packQuestions) &&
      stats.viewed.length === 0 ? (
        <h1>Equal</h1>
      ) : (
        <CDialogWrapper type="warning">
          <h1 className="text-xl font-bold mb-4 text-amber-300">Warning !!!</h1>
          <p>Actualmente tienes un paquete de preguntas activo de: </p>
          <p className="text-sm text-teal-strong/60">
            {packQuestions.length} preguntas
          </p>

          <h2>Estadísticas:</h2>
          <p className="text-sm text-teal-strong/60">
            {stats.viewed.length} preguntas vistas
          </p>
          <p className="text-sm text-teal-strong/60">
            {stats.correct.length} preguntas correctas
          </p>
          <p className="text-sm text-teal-strong/60">
            {stats.incorrect.length} preguntas incorrectas
          </p>

          <h2>
            Estás seguro que quieres abandonar el progreso y empezar este nuevo
            paquete?
          </h2>

          <div className="btn-group">
            <button
              className="btn btn-primary"
              onClick={() => handlePackStart(loadedQuestions, route)}
            >
              Sí, empezar
            </button>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Regresar
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate(routeFrom)}
            >
              Ver pack actual
            </button>
          </div>
        </CDialogWrapper>
      )}
    </main>
  );
};

export default QuestionPack;
