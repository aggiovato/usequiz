import { QuestionType } from "../../types/types";
import { PackStats } from "../../stores/usePackStore";
import { useTranslation } from "react-i18next";

const QuestionListNav = ({
  questions,
  currentIndex,
  stats,
  setCurrentQ,
}: {
  questions: QuestionType[];
  currentIndex: number;
  stats: PackStats;
  setCurrentQ: (q: QuestionType, i: number) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mb-10 max-w-[500px] w-full justify-center ">
      <p className="text-teal-strong/80 text-lg font-bold">
        {t("questions.list-nav.questions-list")}
      </p>
      <div className="flex flex-wrap gap-4 px-6 py-4 border-3 border-teal-bright/70 rounded-md justify-center items-center self-center max-h-[190px] h-full overflow-y-auto mt-4 custom-scrollbar w-full">
        {questions.map((q, index) => {
          const isCurrent = index === currentIndex;
          const isCorrect = stats.correct.includes(q.id);
          const isIncorrect = stats.incorrect.includes(q.id);
          let bgColor = "bg-slate-300";
          if (isCurrent) bgColor = "bg-amber-glow/70";
          else if (isCorrect) bgColor = "bg-teal-bright/70";
          else if (isIncorrect) bgColor = "bg-rose-clay/70";

          return (
            <button
              key={q.id}
              className={`flex w-7 h-7 ${bgColor} rounded-md items-center justify-center text-xs font-bold hover:shadow-inner hover:scale-105 transition-transform duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-glow`}
              onClick={() => setCurrentQ(q, index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionListNav;
