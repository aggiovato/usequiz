import { usePackStore } from "../../stores/usePackStore";
import { QuestionType } from "../../types/types";
import { Trans, useTranslation } from "react-i18next";

const ReadyCard = ({
  loadedQuestions,
  title,
}: {
  loadedQuestions: QuestionType[];
  title: string;
}) => {
  const setCurrentQ = usePackStore((state) => state.setCurrentQ);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-10 gap-4 p-4 md:p-12">
      <h1 className="text-2xl spanned self-center">
        {t("questions.ready.title")}
      </h1>
      <p className="text-base text-teal-strong/90 text-justify">
        <Trans
          i18nKey="questions.ready.subtitle"
          count={loadedQuestions.length}
          components={[<></>, <span />]}
        />
      </p>
      <p className="text-teal-strong/90 self-center">
        <span>{title === "questions.all-questions" ? t(title) : title}</span>
      </p>
      <p className="text-base text-teal-strong/90 text-justify">
        {t("questions.ready.desc")}
      </p>

      <button
        className="btn btn-primary self-center max-w-[150px] w-full"
        onClick={() => setCurrentQ(loadedQuestions[0], 0)}
      >
        {t("questions.ready.start-btn")}
      </button>
    </div>
  );
};

export default ReadyCard;
