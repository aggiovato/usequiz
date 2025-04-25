import QuestionPackMsg from "./QuestionPackMsg";
import QuestionCard from "./QuestionCard";
import ReadyCard from "./ReadyCard";
import QuestionDetails from "./QuestionDetails";
import QuestionListNav from "./QuestionListNav";
import useQuestionPack from "../../hooks/useQuestionPack";
import CLoader from "../../components/customs/CLoader";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const QuestionPack = () => {
  const [seeDetails, setSeeDetails] = useState(false);
  const { t } = useTranslation();
  const {
    isLoading,
    isOpenablePack,
    currentQ,
    loadedQuestions,
    route,
    title,
    stats,
    currentIndex,
    packQuestions,
    setCurrentQ,
  } = useQuestionPack();

  const currentId = currentQ?.id ?? "";

  useEffect(() => {
    setSeeDetails(false);
  }, [currentId]);

  const handleSeeDetails = () => setSeeDetails(!seeDetails);

  const isVerified =
    stats.correct.includes(currentId) || stats.incorrect.includes(currentId);

  if (isLoading) {
    return (
      <main className="min-h-[calc(100vh-6.25rem)] flex items-center justify-center">
        <div className="text-dark-teal/60 text-sm animate-pulse">
          <CLoader />
        </div>
      </main>
    );
  }

  return (
    <main>
      {isOpenablePack ? (
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] min-h-[calc(100vh-6.25rem)] h-full overflow-y-auto">
          <section id="current-question-section" className="p-6 flex flex-col">
            {currentQ ? (
              <QuestionCard question={currentQ} />
            ) : (
              <ReadyCard loadedQuestions={loadedQuestions} title={title} />
            )}
          </section>

          <section
            id="nav-question-section"
            className="rounded-md p-6 flex flex-col gap-4 items-center justify-center bg-teal-bright/8"
          >
            <div className="flex flex-col gap-4 justify-between h-full w-full">
              <div className="flex gap-2 items-center justify-center px-12 py-4">
                <button
                  className="btn btn-primary w-full max-w-[170px] md:max-w-[200px]"
                  onClick={handleSeeDetails}
                  disabled={!isVerified}
                >
                  {seeDetails
                    ? t("questions.details.details-btn.hide")
                    : t("questions.details.details-btn.show")}
                </button>
              </div>

              {seeDetails && isVerified && currentQ && (
                <QuestionDetails currentQ={currentQ} />
              )}

              <div className="flex flex-col justify-center items-center">
                <QuestionListNav
                  questions={packQuestions}
                  currentIndex={currentIndex}
                  stats={stats}
                  setCurrentQ={setCurrentQ}
                />
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
