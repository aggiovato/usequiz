import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { PackStats, usePackStore } from "../../stores/usePackStore";
import type { ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const generateData = (stats: PackStats) => {
  const correct = stats.correct.length;
  const incorrect = stats.incorrect.length;
  const pending = stats.total - stats.viewed.length;

  const data = {
    labels: ["Correctas", "Incorrectas", "Pendientes"],
    datasets: [
      {
        data: [correct, incorrect, pending],
        backgroundColor: ["#0bb89e", "#ff6b6b", "#84babf"],
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
  const { stats } = usePackStore();
  const { data, options } = generateData(stats);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-3 md:p-6 max-w-xs items-center">
      <div className={`md:order-2 ${className}`}>
        <Doughnut data={data} options={options} />
      </div>

      {showInfo && (
        <div className="text-center md:text-left md:order-1">
          <h1 className="text-md font-bold text-dark-teal mb-2 mt-2">
            Continuar...
          </h1>
          <p className="text-sm text-dark-teal/60">
            Has completado <span>{stats.viewed.length}</span> de{" "}
            <span>{stats.total}</span> preguntas.
          </p>
        </div>
      )}
    </div>
  );
};

export default PieChart;
