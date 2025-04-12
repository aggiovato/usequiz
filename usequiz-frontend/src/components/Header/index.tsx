import Navbar from "./Navbar";
import { ReactNode } from "react";
import TextProvider from "../../contexts/TextProvider";
import BreadcrumbsIcon from "../icons/BreadcrumbsIcon";

const Header = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: ReactNode;
}) => (
  <header className="flex justify-between items-center bg-dark-teal text-light-bg h-20 sticky top-0 z-10 shadow-md">
    <div className="flex flex-col items-start">
      <h1 className="text-xl font-bold select-none ml-8">
        {<TextProvider text={title} />}
      </h1>
      <h2 className="text-sm text-amber-glow font-light italic select-none ml-8">
        {subtitle ?? <BreadcrumbsIcon className="w-4 h-4" />}
      </h2>
    </div>

    <Navbar />
  </header>
);

export default Header;
