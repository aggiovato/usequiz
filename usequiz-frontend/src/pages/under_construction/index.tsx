import UnderCIcon from "../../components/icons/UnderCIcon";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../components/icons/HomeIcon";
import PaperplaneIcon from "../../components/icons/PaperplaneIcon";

const UnderConstruction = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col p-8 justify-center items-center">
      <UnderCIcon className="w-80 h-60 md:w-140 md:h-85" />
      <h1 className="text-2xl font-bold mb-6 md:mb-2 text-center">
        {t("under_construction.title")}
      </h1>
      <p className="text-sm mt-2 text-justify">
        {t("under_construction.subtitle")}
      </p>
      <p className="text-sm mt-6 md:mt-2 text-justify">
        {t("under_construction.desc")}
      </p>

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

export default UnderConstruction;
