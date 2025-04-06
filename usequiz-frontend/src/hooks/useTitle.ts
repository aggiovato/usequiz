import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const useTitle = () => {
  const location = useLocation();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

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

  const handleSubtitle = (): string => {
    if (location.pathname.startsWith("/subjects/") && params.subject)
      return `${params.subject}  >>>  ${
        params.unit
          ? params.unit
          : location.pathname.includes("/questions")
          ? "All questions"
          : "Units"
      }`;
    return "";
  };

  useEffect(() => {
    setTitle((): string => handleTitle());
    setSubtitle((): string => handleSubtitle());
  }, [location]);

  return { title, subtitle };
};

export default useTitle;
