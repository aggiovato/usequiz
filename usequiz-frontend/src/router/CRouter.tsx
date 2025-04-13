import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import CSuspenseWrapper from "../components/customs/CSuspenseWrapper";
import { homeLoader } from "../loaders/homeLoader";
import { subjectsLoader } from "../loaders/subjectsLoader";
import { questionsLoader } from "../loaders/questionsLoader";
import { unitsLoader } from "../loaders/unitsLoader";
import Questions from "../pages/questions";
import MainLayout from "../layouts/MainLayout";
import ContactLayout from "../layouts/ContactLayout";
import QuestionView from "../pages/questions/QuestionView";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const NotFound = lazy(() => import("../pages/404"));
const Subjects = lazy(() => import("../pages/subjects"));
const Units = lazy(() => import("../pages/units"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <CSuspenseWrapper>
            <Home />
          </CSuspenseWrapper>
        ),
        loader: homeLoader,
      },
      {
        path: "about",
        element: (
          <CSuspenseWrapper>
            <About />
          </CSuspenseWrapper>
        ),
      },
      {
        path: "subjects",
        element: (
          <CSuspenseWrapper>
            <Subjects />
          </CSuspenseWrapper>
        ),
        loader: subjectsLoader,
      },
      {
        path: "subjects/:subject",
        element: (
          <CSuspenseWrapper>
            <Units />
          </CSuspenseWrapper>
        ),
        loader: unitsLoader,
      },
      {
        path: "questions",
        element: (
          <CSuspenseWrapper>
            <Questions />
          </CSuspenseWrapper>
        ),
        loader: questionsLoader,
        children: [
          {
            path: ":id",
            element: <QuestionView />,
          },
        ],
      },
      {
        path: "subjects/:subject/questions",
        element: (
          <CSuspenseWrapper>
            <Questions />
          </CSuspenseWrapper>
        ),
        loader: questionsLoader,
        children: [
          {
            path: ":id",
            element: <QuestionView />,
          },
        ],
      },
      {
        path: "subjects/:subject/:unit/questions",
        element: (
          <CSuspenseWrapper>
            <Questions />
          </CSuspenseWrapper>
        ),
        loader: questionsLoader,
        children: [
          {
            path: ":id",
            element: <QuestionView />,
          },
        ],
      },
      {
        path: "*",
        element: (
          <CSuspenseWrapper>
            <NotFound />
          </CSuspenseWrapper>
        ),
      },
    ],
  },
  {
    path: "contact",
    element: <ContactLayout />,
    children: [
      {
        index: true,
        element: (
          <CSuspenseWrapper>
            <Contact />
          </CSuspenseWrapper>
        ),
      },
    ],
  },
]);
