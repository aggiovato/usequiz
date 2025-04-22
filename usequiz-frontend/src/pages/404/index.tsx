import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NotFoundIcon from "../../components/icons/NotFoundIcon";
import HomeIcon from "../../components/icons/HomeIcon";
import PaperplaneIcon from "../../components/icons/PaperplaneIcon";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <NotFoundIcon className="w-90 h-40 md:w-120 md:h-60" />
      <h1 className="text-2xl font-bold mt-12 mb-6 md:mt-8 md:mb-2 text-center">
        {t("404.title")}
      </h1>
      <p className="text-sm mt-2 text-justify">{t("404.subtitle")}</p>
      <p className="text-sm mt-6 md:mt-2 text-justify">{t("404.contact")}</p>

      <div className="btn-group">
        <button
          className="btn btn-primary btn-icon"
          onClick={() => navigate("/")}
        >
          {t("404.home_btn")}
          <HomeIcon className="mb-0.5" />
        </button>

        <button
          className="btn btn-primary btn-icon"
          onClick={() => navigate("/contact")}
        >
          {t("404.contact_btn")}
          <PaperplaneIcon />
        </button>
      </div>
    </div>
  );
};

export default NotFound;
