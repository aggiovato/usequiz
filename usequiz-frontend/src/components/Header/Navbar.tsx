import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      {/* Desktop navbar */}
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/" className="navbar-anchor">
          Home
        </Link>
        <Link to="/subjects" className="navbar-anchor">
          Subjects
        </Link>
        <Link to="/questions" className="navbar-anchor">
          All questions
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
        {open ? "x" : "menu"}
      </button>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-teal-strong shadow-md flex flex-col items-start md:hidden z-50">
          <Link
            to="/"
            className="px-8 py-3 w-full hover:w-full hover:bg-dark-teal hover:text-amber-glow"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/subjects"
            className="px-8 py-3 w-full hover:w-full hover:bg-dark-teal hover:text-amber-glow"
            onClick={() => setOpen(false)}
          >
            Subjects
          </Link>
          <Link
            to="/questions"
            className="px-8 py-3 w-full hover:w-full hover:bg-dark-teal hover:text-amber-glow"
            onClick={() => setOpen(false)}
          >
            All questions
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 w-full hover:w-full hover:bg-dark-teal hover:text-amber-glow"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 w-full hover:w-full hover:bg-dark-teal hover:text-amber-glow"
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
