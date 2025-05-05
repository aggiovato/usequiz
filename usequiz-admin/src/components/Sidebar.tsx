// src/components/Sidebar.tsx
import { Link, useLocation } from "react-router-dom";
import adminIcon from "../assets/icons/admin-sidebar.svg";
import clsx from "clsx";

const links = [
  { label: "Questions", path: "/" },
  { label: "Add Question", path: "/questions/new" },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden md:block w-64 min-h-screen bg-dark-teal text-light-teal p-6 space-y-6 font-sans">
      <div className="flex items-center justify-center">
        <img src={adminIcon} alt="logo" className="w-45 h-15 object-contain" />
      </div>
      <nav className="space-y-2">
        {links.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={clsx(
              "block px-4 py-2 rounded-md transition-colors font-medium",
              pathname === path
                ? "bg-teal-bright/30 text-white"
                : "text-light-teal/80 hover:bg-teal-bright/10 hover:text-white"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
