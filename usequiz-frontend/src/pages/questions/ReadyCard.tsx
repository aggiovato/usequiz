import { usePackStore } from "../../stores/usePackStore";
import { QuestionType } from "../../types/types";

const ReadyCard = ({
  loadedQuestions,
}: {
  loadedQuestions: QuestionType[];
}) => {
  const setCurrentQ = usePackStore((state) => state.setCurrentQ);
  return (
    <div className="flex flex-col items-start space-y-4 md:space-y-10 gap-4 p-4 md:p-12">
      <h1 className="text-2xl spanned self-center">Listo para comenzar?</h1>
      <p className="text-base text-teal-strong/90">
        Estás a punto de revisar <span>{loadedQuestions.length}</span> preguntas
        de este módulo. Si estás listo para comenzar a revisar, haz clic en el
        botón "Comenzar"
      </p>

      <button
        className="btn btn-primary self-center max-w-[150px] w-full"
        onClick={() => setCurrentQ(loadedQuestions[0], 0)}
      >
        Comenzar
      </button>
    </div>
  );
};

export default ReadyCard;
