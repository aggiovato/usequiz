import { useState } from "react";
import { Link } from "react-router-dom";
import HamburguerIcon from "../icons/HamburguerIcon";
import IksIcon from "../icons/IksIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      {/* Desktop navbar */}
      <div className="hidden md:flex gap-2 items-center">
        <Link to="/" className="navbar-anchor">
          Home
        </Link>
        <Link to="/subjects" className="navbar-anchor">
          Subjects
        </Link>
        <Link to="/questions" className="navbar-anchor">
          Questions
        </Link>
        <Link to="/about" className="navbar-anchor">
          About
        </Link>
        <Link to="/contact" className="navbar-anchor">
          Contact
        </Link>
      </div>

      {/* Mobile hamburger icon */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? (
          <IksIcon className="w-6 h-6 hover:opacity-70" />
        ) : (
          <HamburguerIcon className="w-6 h-6 hover:opacity-70" />
        )}
      </button>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-dark-teal/95 shadow-md flex flex-col items-start mid:hidden z-40">
          <Link
            to="/"
            className="px-8 py-3 w-full hover:bg-dark-teal/80 hover:text-amber-glow"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/subjects"
            className="px-8 py-3 w-full hover:bg-dark-teal/80 hover:text-amber-glow"
            onClick={() => setOpen(false)}
          >
            Subjects
          </Link>
          <Link
            to="/questions"
            className="px-8 py-3 w-full hover:bg-dark-teal/80 hover:text-amber-glow"
            onClick={() => setOpen(false)}
          >
            Questions
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 w-full hover:bg-dark-teal/80 hover:text-amber-glow"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 w-full hover:bg-dark-teal/80 hover:text-amber-glow"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
