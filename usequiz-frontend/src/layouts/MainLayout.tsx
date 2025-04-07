import { Outlet } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import Header from "../components/Header";

const MainLayout = () => {
  const { title, subtitle } = useTitle();

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <main className="m-0 p-6">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
