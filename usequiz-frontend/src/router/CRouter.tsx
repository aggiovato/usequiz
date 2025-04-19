import { createBrowserRouter } from "react-router-dom";
import { homeLoader } from "../loaders/homeLoader";
import { subjectsLoader } from "../loaders/subjectsLoader";
import { questionsLoader } from "../loaders/questionsLoader";
import { unitsLoader } from "../loaders/unitsLoader";
import Questions from "../pages/questions";
import MainLayout from "../layouts/MainLayout";
import ContactLayout from "../layouts/ContactLayout";
import Home from "../pages/home";
import About from "../pages/about";
import Subjects from "../pages/subjects";
import Units from "../pages/units";
import NotFound from "../pages/404";
import Contact from "../pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "subjects",
        element: <Subjects />,
        loader: subjectsLoader,
      },
      {
        path: "subjects/:subject",
        element: <Units />,
        loader: unitsLoader,
      },
      {
        path: "questions",
        element: <Questions />,
        loader: questionsLoader,
      },
      {
        path: "subjects/:subject/questions",
        element: <Questions />,
        loader: questionsLoader,
      },
      {
        path: "subjects/:subject/:unit/questions",
        element: <Questions />,
        loader: questionsLoader,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "contact",
    element: <ContactLayout />,
    children: [
      {
        index: true,
        element: <Contact />,
      },
    ],
  },
]);
