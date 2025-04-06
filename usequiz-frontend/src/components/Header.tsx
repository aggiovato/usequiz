import { Link } from "react-router-dom";

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <header className="bg-blue-600 text-white p-4 shadow">
    <h1 className="text-xl font-bold">{title}</h1>
    <h2 className="text-lg">{subtitle}</h2>
    <nav className="mt-2">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/subjects" className="mr-4">
        Subjects
      </Link>
      <Link to="/questions" className="mr-4">
        All Questions
      </Link>
      <Link to="/about" className="mr-4">
        About
      </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
