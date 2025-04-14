import { useQuestionStore } from "../../stores/useQuestionStore";
import { QuestionType } from "../../types/types";

const ReadyCard = () => {
  const questions = useQuestionStore<QuestionType[]>(
    (state) => state.questions
  );

  const handleReady = () => {
    useQuestionStore.getState().setCurrentQ(questions[0]);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-md h-full">
      <h2 className="text-xl font-bold mb-4">Estás listo ?</h2>
      <p className="text-sm text-teal-strong/60">{`Estás a punto de revisar ${questions.length} preguntas del módulo de ${questions[0].subject}.`}</p>

      <button className="btn btn-primary" onClick={handleReady}>
        Vamos !!!
      </button>
    </div>
  );
};

export default ReadyCard;
