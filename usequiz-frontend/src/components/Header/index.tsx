import Navbar from "./Navbar";
import { ReactNode } from "react";
import TextProvider from "../../contexts/TextProvider";
import BreadcrumbsIcon from "../icons/BreadcrumbsIcon";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo_navbar.png";
import CLanguageDropdown from "../customs/CLanguageDropdown";

const Header = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center bg-dark-teal text-light-bg h-16 md:h-25 sticky top-0 z-10 shadow-md">
      <div className="flex gap-4 md:gap-6 items-center">
        <button onClick={() => navigate("/")} className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-7 h-7 md:w-12 md:h-12 select-none ml-4 md:ml-6 target-blank"
          />
        </button>

        <div className="flex flex-col items-start">
          <h1 className="text-base md:text-xl font-bold select-none md:mb-2">
            {<TextProvider text={title} />}
          </h1>
          <h2 className="hidden md:block text-sm text-amber-glow font-light italic select-none">
            {subtitle ?? <BreadcrumbsIcon className="w-4 h-4" />}
          </h2>
        </div>
      </div>

      <div className="flex md:gap-4 items-stretch">
        <Navbar />

        <CLanguageDropdown />
      </div>
    </header>
  );
};

export default Header;
