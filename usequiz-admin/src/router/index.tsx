// src/router/index.tsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import QuestionList from "../pages/questions/QuestionList";
import QuestionForm from "../pages/questions/QuestionForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <QuestionList /> },
      { path: "/questions/new", element: <QuestionForm /> },
      { path: "/questions/:id", element: <QuestionForm /> },
    ],
  },
]);
