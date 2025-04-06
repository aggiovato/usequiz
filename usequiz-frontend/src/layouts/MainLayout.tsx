import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import useTitle from "../hooks/useTitle";

const MainLayout = () => {
  const { title } = useTitle();

  return (
    <>
      <Header title={title} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
