import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect, ReactNode } from "react";
import BreadcrumbsIcon from "../components/icons/BreadcrumbsIcon";
import TextProvider from "../contexts/TextProvider";

const useTitle = () => {
  const location = useLocation();
  const params = useParams();
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<ReactNode>(null);

  useEffect(() => {
    setTitle(handleTitle());
    setSubtitle(handleSubtitle());
  }, [location, params]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTitle = (): string => {
    if (location.pathname === "/") return "Home";
    if (location.pathname === "/about") return "About";
    if (location.pathname === "/contact") return "Contact";
    if (location.pathname === "/subjects") return "Subjects";
    if (location.pathname === "/questions") return "Global questions";
    if (location.pathname.includes("/questions")) return "Questions List";
    if (location.pathname.startsWith("/subjects/") && params.subject)
      return `${params.subject}`;
    return "Not found";
  };

  const handleSubtitle = (): ReactNode => {
    if (location.pathname.startsWith("/subjects/") && params.subject) {
      return (
        <span className="flex items-center gap-2 text-sm text-amber-glow">
          {params.subject}
          <BreadcrumbsIcon className="w-4 h-4" />
          <TextProvider
            text={
              params.unit
                ? params.unit
                : location.pathname.includes("/questions")
                ? "All questions"
                : "Units"
            }
          />
        </span>
      );
    }

    return null;
  };

  return { title, subtitle };
};

export default useTitle;
