import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/CRouter";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </StrictMode>
);
