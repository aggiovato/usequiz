import { Link, useNavigate } from "react-router-dom";
import { usePackStore } from "../../stores/usePackStore";
import PieChart from "./PieChart";
import { useTranslation, Trans } from "react-i18next";

const WelcomeMsg = () => {
  const navigate = useNavigate();
  const { stats, routeFrom } = usePackStore();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row md:gap-12 items-center">
      <div className="relative flex flex-col items-center gap-6 mt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-dark-teal/80">
          <Trans
            i18nKey="home.welcome_msg.title"
            components={[
              <></>,
              <></>,
              <div className="text-teal-strong/80 font-bold px-2 py-0 rounded-md bg-teal-bright/10 text-3xl md:text-4xl" />,
            ]}
          />
        </h1>
        <p className="max-w-[40ch] text-dark-teal/80 text-lg">
          {t("home.welcome_msg.secondary")}
        </p>
        <div className="btn-group">
          <Link to="/sign-up" className="btn btn-primary">
            {t("home.welcome_msg.sign_up")}
          </Link>
          <Link to="/subjects" className="btn btn-ghost">
            {t("home.welcome_msg.hit_the_road")}
          </Link>
        </div>
      </div>

      {/* *************************************************************************** */}

      {/* Actual pack question card */}
      {stats.viewed.length > 0 && (
        <div
          className="relative overflow-hidden px-2 md:border-3 text-teal-strong border-teal-bright rounded-md  hover:border-teal-shine/70 transition hover:shadow-lg md:shadow-inner mt-8 md:mt-50"
          onClick={() => navigate(routeFrom)}
        >
          <PieChart />
        </div>
      )}
    </div>
  );
};

export default WelcomeMsg;
