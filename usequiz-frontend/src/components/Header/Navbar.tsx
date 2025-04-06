import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default Navbar;
