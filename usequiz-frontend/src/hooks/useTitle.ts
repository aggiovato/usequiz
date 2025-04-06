import { useLocation /* useParams */ } from "react-router-dom";
import { useState, useEffect } from "react";

const useTitle = () => {
  const location = useLocation();
  //const params = useParams();
  const [title, setTitle] = useState("");
  //const [subtitle, setSubtitle] = useState("");

  const handleTitle = (): string => {
    if (location.pathname === "/") return "Home";
    if (location.pathname === "/about") return "About";
    if (location.pathname === "/contact") return "Contact";
    if (location.pathname === "/subjects") return "Subjects";
    if (location.pathname === "/questions") return "Global questions";
    if (location.pathname.includes("/questions")) return "Questions List";
    return "Not found";
  };

  useEffect(() => {
    setTitle((): string => handleTitle());
  }, [location]);

  return { title /* subtitle */ };
};

export default useTitle;
