import { Link } from "react-router-dom";

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <header className="flex justify-between items-center p-6 bg-teal-strong text-light-bg h-20 sticky top-0 z-10 shadow-md">
    <div className="flex flex-col items-start">
      <h1 className="text-xl font-bold select-none">{title}</h1>
      <h2 className="text-sm font-light italic select-none">{subtitle}</h2>
    </div>
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
