import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import useTitle from "../hooks/useTitle";

const MainLayout = () => {
  const { title, subtitle } = useTitle();

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
