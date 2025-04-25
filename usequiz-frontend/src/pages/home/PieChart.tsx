import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { PackStats, usePackStore } from "../../stores/usePackStore";
import type { ChartOptions } from "chart.js";
import { useTranslation, Trans } from "react-i18next";
import { TFunction } from "i18next";
import CTooltip from "../../components/customs/CTooltip";

ChartJS.register(ArcElement, Tooltip);

const generateData = (stats: PackStats, t: TFunction) => {
  const correct = stats.correct.length;
  const incorrect = stats.incorrect.length;
  const pending = stats.total - stats.viewed.length;

  const data = {
    labels: [
      t("home.donut.stats.correct"),
      t("home.donut.stats.incorrect"),
      t("home.donut.stats.pending"),
    ],
    datasets: [
      {
        data: [correct, incorrect, pending],
        backgroundColor: ["#0d6f73", "#ff6b6b", "#84babf"],
        hoverOffset: 3,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return {
    data,
    options,
  };
};

const PieChart = ({
  showInfo = true,
  className = "w-32 h-32",
}: {
  showInfo?: boolean;
  className?: string;
}) => {
  const { t } = useTranslation();
  const { stats, title } = usePackStore();
  const { data, options } = generateData(stats, t);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-3 md:p-6 max-w-xs items-center">
      <div className={`md:order-2 ${className}`}>
        <Doughnut data={data} options={options} />
      </div>

      {showInfo && (
        <div className="relative text-center md:text-left md:order-1">
          <h1 className="text-md font-bold text-dark-teal mb-2 mt-1">
            {t("home.donut.title")}
          </h1>
          <CTooltip tooltipText={title}>
            <div className="mb-2 max-w-[15ch] truncate">
              <span>
                {title === "questions.all-questions" ? t(title) : title}
              </span>
            </div>
          </CTooltip>
          <p className="text-sm text-dark-teal/60">
            <Trans
              i18nKey="home.donut.progress"
              values={{
                viewed: stats.viewed.length,
                total: stats.total,
              }}
              components={[<></>, <span />]}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default PieChart;
