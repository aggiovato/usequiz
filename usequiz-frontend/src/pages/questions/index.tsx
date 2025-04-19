import QuestionPackMsg from "./QuestionPackMsg";
import QuestionCard from "./QuestionCard";
import ReadyCard from "./ReadyCard";
import useQuestionPack from "../../hooks/useQuestionPack";

const QuestionPack = () => {
  const {
    isOpenablePack,
    currentQ,
    loadedQuestions,
    route,
    packQuestions,
    setCurrentQ,
  } = useQuestionPack();

  return (
    <main>
      {isOpenablePack ? (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-6.25rem)] h-full overflow-y-auto">
          <section id="current-question-section" className="p-6 flex flex-col">
            {currentQ ? (
              <QuestionCard question={currentQ} />
            ) : (
              <ReadyCard loadedQuestions={loadedQuestions} />
            )}
          </section>

          {/* *************************************************************************** */}

          <section
            id="nav-question-section"
            className="rounded-md p-6 flex flex-col gap-4 items-center justify-center"
          >
            <div className="flex flex-col gap-4 justify-between h-full">
              <div className="flex gap-2 items-center justify-center px-12 py-4">
                <button className="btn btn-ghost w-full">Ver respuesta</button>
                <button className="btn btn-primary w-full">Detalles</button>
              </div>

              {/* Questions list */}
              <div className="flex flex-col mb-10 max-w-[500px] w-full">
                <p>Questions</p>
                <div className="flex flex-wrap gap-4 px-6 py-4 border-2 border-teal-bright rounded-md justify-center items-center max-h-[200px] h-full overflow-y-auto mt-4">
                  {packQuestions.map((question, index) => {
                    return (
                      <button
                        key={question.id}
                        className="flex w-7 h-7 bg-teal-strong/90 rounded-md items-center justify-center text-xs text-white font-bold hover:shadow-inner hover:text-amber-glow active:bg-dark-teal focus:outline-none focus:ring-2 focus:ring-amber-glow focus:shadow-md"
                        onClick={() => setCurrentQ(question)}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <QuestionPackMsg loadedQuestions={loadedQuestions} route={route} />
      )}
    </main>
  );
};

export default QuestionPack;
