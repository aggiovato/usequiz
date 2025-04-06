import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import useTitle from "../hooks/useTitle";

const Header = lazy(() => import("../components/Header"));

const MainLayout = () => {
  const { title, subtitle } = useTitle();

  return (
    <>
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <Header title={title} subtitle={subtitle} />
        <main className="m-0 p-6">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default MainLayout;
