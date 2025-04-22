import CDialogWrapper from "../../components/customs/CDialogWrapper";
import { usePackStore } from "../../stores/usePackStore";
import { useNavigate } from "react-router-dom";
import { QuestionType } from "../../types/types";
import { useTranslation, Trans } from "react-i18next";
import PieChart from "../home/PieChart";

const QuestionPackMsg = ({
  loadedQuestions,
  route,
}: {
  loadedQuestions: QuestionType[];
  route: string;
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { routeFrom, stats, setQuestions } = usePackStore();

  const handlePackStart = (questions: QuestionType[], route: string) => {
    if (questions.length === 0) return;
    setQuestions(questions, route);
  };

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <CDialogWrapper type="warning">
      <div className="flex flex-col gap-3 mt-4 text-sm">
        <p className="text-center">
          <Trans
            i18nKey="dialog.warning.changepack_warning.info"
            count={stats.total}
            components={[<></>, <span />]}
          />
        </p>

        <div className="flex gap-6 justify-center items-center">
          <div className="text-xs space-y-1 mt-2">
            <h2>{t("dialog.warning.changepack_warning.stats")}:</h2>
            <p className="text-teal-strong/60">
              <Trans
                i18nKey="dialog.warning.changepack_warning.seen"
                count={stats.viewed.length}
                components={[<span />]}
              />
            </p>
            <p className="text-teal-strong/60">
              <Trans
                i18nKey="dialog.warning.changepack_warning.right"
                count={stats.correct.length}
                components={[<span />]}
              />
            </p>
            <p className="text-teal-strong/60">
              <Trans
                i18nKey="dialog.warning.changepack_warning.wrong"
                count={stats.incorrect.length}
                components={[<span />]}
              />
            </p>
          </div>

          <PieChart showInfo={false} className="w-23 h-23" />
        </div>
      </div>

      {/* *************************************************************************** */}

      <p className="text-sm text-dark-teal mt-6 text-center">
        {t("dialog.warning.changepack_warning.question")}
      </p>

      <div className="flex flex-col gap-2 max-w-[260px] mx-auto items-stretch mt-6">
        <button
          className="btn btn-primary"
          onClick={() => handlePackStart(loadedQuestions, route)}
        >
          {t("dialog.warning.changepack_warning.yes")}
        </button>
        <button className="btn btn-ghost" onClick={() => navigate(routeFrom)}>
          {t("dialog.warning.changepack_warning.actual")}
        </button>
        <button className="btn btn-ghost" onClick={handleBack}>
          {t("dialog.warning.changepack_warning.back")}
        </button>
      </div>
    </CDialogWrapper>
  );
};

export default QuestionPackMsg;
