import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect, ReactNode } from "react";
import BreadcrumbsIcon from "../components/icons/BreadcrumbsIcon";
import TextProvider from "../contexts/TextProvider";
import { useTranslation } from "react-i18next";

const useTitle = () => {
  const location = useLocation();
  const params = useParams();
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<ReactNode>(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    setTitle(handleTitle());
    setSubtitle(handleSubtitle());
  }, [location, params, i18n.language]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTitle = (): string => {
    if (location.pathname === "/") return t("header.titles.home");
    if (location.pathname === "/about") return t("header.titles.about");
    if (location.pathname === "/contact") return t("header.titles.contact");
    if (location.pathname === "/subjects") return t("header.titles.subjects");
    if (location.pathname === "/questions") return t("header.titles.questions");
    if (location.pathname === "/sign-up") return t("header.titles.sign_up");
    if (location.pathname.includes("/questions"))
      return t("header.titles.questions_list");
    if (location.pathname.startsWith("/subjects/") && params.subject)
      return `${params.subject}`;
    return t("header.titles.404");
  };

  const handleSubtitle = (): ReactNode => {
    if (location.pathname.startsWith("/subjects/") && params.subject) {
      return (
        <div className="flex items-center gap-2 text-sm text-amber-glow">
          {params.subject}
          <BreadcrumbsIcon className="w-4 h-4" />
          <TextProvider
            text={
              params.unit
                ? params.unit
                : location.pathname.includes("/questions")
                ? t("header.titles.all_questions")
                : t("header.titles.all_units")
            }
          />
        </div>
      );
    }

    return null;
  };

  return { title, subtitle };
};

export default useTitle;
