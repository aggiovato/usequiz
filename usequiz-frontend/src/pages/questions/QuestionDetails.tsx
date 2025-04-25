import { QuestionType } from "../../types/types";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

const QuestionDetails = ({ currentQ }: { currentQ: QuestionType }) => {
  const { t } = useTranslation();
  if (!currentQ) return null;

  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 max-w-[500px] w-full">
      <h3 className="font-bold text-lg text-teal-strong/70">
        {t("questions.details.explanation")}
      </h3>
      <ReactMarkdown>{currentQ.explanation}</ReactMarkdown>

      <hr className="my-4" />

      <div className="text-sm text-gray-700 space-y-1.5">
        <p>
          <span>{t("questions.details.subject")}</span> - {currentQ.subject}
        </p>
        <p>
          <span>{t("questions.details.unit")}</span> - {currentQ.unit.title}
        </p>
        <p>
          <span>{t("questions.details.difficulty")}</span> -{" "}
          {currentQ.difficulty}
        </p>
        <p>
          <span>{t("questions.details.tags")}</span> -{" "}
          {currentQ.tags.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default QuestionDetails;
