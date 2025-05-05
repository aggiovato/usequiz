// src/layouts/MainLayout.tsx
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-0 bg-light-bg text-dark-teal min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
