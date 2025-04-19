import Navbar from "./Navbar";
import { ReactNode } from "react";
import TextProvider from "../../contexts/TextProvider";
import BreadcrumbsIcon from "../icons/BreadcrumbsIcon";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo_navbar.png";

const Header = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center bg-dark-teal text-light-bg h-25 sticky top-0 z-10 shadow-md">
      <div className="flex gap-6 items-center">
        <button onClick={() => navigate("/")} className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 select-none ml-6 target-blank"
          />
        </button>

        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold select-none mb-2">
            {<TextProvider text={title} />}
          </h1>
          <h2 className="hidden md:block text-sm text-amber-glow font-light italic select-none">
            {subtitle ?? <BreadcrumbsIcon className="w-4 h-4" />}
          </h2>
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
