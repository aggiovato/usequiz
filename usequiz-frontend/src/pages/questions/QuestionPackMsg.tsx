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
  const { routeFrom, stats, setQuestions, title, resetPack } = usePackStore();

  const isCompleted = stats.viewed.length === stats.total && stats.total > 0;
  const score = stats.correct.length;
  const score_percent = Math.round((score / stats.total) * 100);

  const handlePackStart = () => {
    if (loadedQuestions.length === 0) return;
    setQuestions(loadedQuestions, route);
  };

  const handleResetPack = () => {
    resetPack();
    navigate(routeFrom);
  };

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <CDialogWrapper type={isCompleted ? "success" : "warning"}>
      <div className="flex flex-col gap-3 mt-4 text-sm text-center">
        {isCompleted ? (
          <>
            <h2 className="text-lg font-semibold text-teal-strong">
              <Trans
                i18nKey="dialog.success.completed.title"
                values={{ title }}
                components={[<></>, <span />]}
              />
            </h2>
            <div className="mt-6">
              <Trans
                i18nKey="dialog.success.completed.score"
                values={{ score, total: stats.total, score_percent }}
                components={[
                  <></>,
                  <span className="font-bold" />,
                  <span className="spanned-rose max-w-[6ch] md:max-w-[6ch] w-full text-center" />,
                ]}
              />
            </div>
            <div className="flex justify-center">
              <PieChart showInfo={false} className="w-24 h-24" />
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-teal-strong">{title}</h2>

            <p>
              <Trans
                i18nKey="dialog.warning.changepack_warning.info"
                count={stats.total}
                components={[<></>, <span />]}
              />
            </p>

            <div className="flex gap-6 justify-center items-center">
              <div className="text-xs space-y-1 mt-2 text-left">
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
          </>
        )}
      </div>

      {/* Buttons */}

      <div className="flex flex-col gap-2 mx-auto items-stretch mt-6">
        {isCompleted ? (
          <>
            <button
              className="btn btn-primary max-w-[260px] self-center w-full"
              onClick={handlePackStart}
            >
              {t("dialog.success.completed.new-pack")}
            </button>
            <button
              className="btn btn-ghost max-w-[260px] self-center w-full"
              onClick={handleResetPack}
            >
              {t("dialog.success.completed.reset")}
            </button>
            <button
              className="btn btn-ghost max-w-[260px] self-center w-full"
              onClick={handleBack}
            >
              {t("dialog.success.completed.back")}
            </button>
          </>
        ) : (
          <>
            <p className="text-sm text-dark-teal mb-4 text-center max-w-[70ch]">
              {t("dialog.warning.changepack_warning.question")}
            </p>
            <button
              className="btn btn-primary max-w-[260px] self-center w-full"
              onClick={handlePackStart}
            >
              {t("dialog.warning.changepack_warning.yes")}
            </button>
            <button
              className="btn btn-ghost max-w-[260px] self-center w-full"
              onClick={() => navigate(routeFrom)}
            >
              {t("dialog.warning.changepack_warning.actual")}
            </button>
            <button
              className="btn btn-ghost max-w-[260px] self-center w-full"
              onClick={handleBack}
            >
              {t("dialog.warning.changepack_warning.back")}
            </button>
          </>
        )}
      </div>
    </CDialogWrapper>
  );
};

export default QuestionPackMsg;
