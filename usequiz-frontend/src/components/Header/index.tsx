import Navbar from "./Navbar";

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <header className="flex justify-between items-center bg-teal-strong text-light-bg h-20 sticky top-0 z-10 shadow-md">
    <div className="flex flex-col items-start">
      <h1 className="text-xl font-bold select-none">{title}</h1>
      <h2 className="text-sm font-light italic select-none">{subtitle}</h2>
    </div>

    <Navbar />
  </header>
);

export default Header;
