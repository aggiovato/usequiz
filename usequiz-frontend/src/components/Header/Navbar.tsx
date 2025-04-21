import { Link, useLocation } from "react-router-dom";
import { useNavbar } from "../../hooks/useNavbar";
import HamburguerIcon from "../icons/HamburguerIcon";
import IksIcon from "../icons/IksIcon";

const Navbar = () => {
  const location = useLocation();
  const { open, setOpen, currentedRoutes, dropdownRef } = useNavbar(location);

  return (
    <nav className="navbar">
      {/* Desktop navbar */}
      <div className="hidden md:flex gap-2 items-center">
        {currentedRoutes.map((route) => (
          <Link
            key={route.name}
            to={route.path}
            className={`navbar-anchor ${
              route.currentPage ? "navbar-active" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            {route.name}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger icon */}
      <div ref={dropdownRef}>
        <button
          className="md:hidden gap-0 p-0"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? (
            <IksIcon className="w-5 h-6 hover:opacity-70" />
          ) : (
            <HamburguerIcon className="w-5 h-6 hover:opacity-70" />
          )}
        </button>

        {/* Mobile dropdown menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-dark-teal/95 shadow-md flex flex-col items-start border-t-2 border-t-teal-600 p-2 mid:hidden z-40 text-base transition-all duration-300">
            {currentedRoutes.map((route) => (
              <Link
                key={route.name}
                to={route.path}
                className={`px-8 py-3 w-full rounded-lg hover:bg-teal-strong hover:text-amber-glow transition-all duration-200 ${
                  route.currentPage ? "text-amber-glow bg-teal-strong/70" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
