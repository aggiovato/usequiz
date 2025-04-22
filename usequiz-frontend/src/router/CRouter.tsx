import { createBrowserRouter } from "react-router-dom";
import { JSX, lazy, Suspense } from "react";
import { subjectsLoader } from "../loaders/subjectsLoader";
import { questionsLoader } from "../loaders/questionsLoader";
import CLoader from "../components/customs/CLoader";

// Lazy imports for pages
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Subjects = lazy(() => import("../pages/subjects"));
const Units = lazy(() => import("../pages/units"));
const Questions = lazy(() => import("../pages/questions"));
const NotFound = lazy(() => import("../pages/404"));
const Contact = lazy(() => import("../pages/contact"));

// Lazy imports for layouts
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const ContactLayout = lazy(() => import("../layouts/ContactLayout"));

// Suspense wrapper
const withSuspense = (Component: JSX.Element) => (
  <Suspense fallback={<CLoader />}>{Component}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(<MainLayout />),
    children: [
      {
        index: true,
        element: withSuspense(<Home />),
      },
      {
        path: "about",
        element: withSuspense(<About />),
      },
      {
        path: "subjects",
        element: withSuspense(<Subjects />),
        loader: subjectsLoader,
      },
      {
        path: "subjects/:subject",
        element: withSuspense(<Units />),
      },
      {
        path: "questions",
        element: withSuspense(<Questions />),
        loader: questionsLoader,
      },
      {
        path: "subjects/:subject/questions",
        element: withSuspense(<Questions />),
        loader: questionsLoader,
      },
      {
        path: "subjects/:subject/:unit/questions",
        element: withSuspense(<Questions />),
        loader: questionsLoader,
      },
      {
        path: "*",
        element: withSuspense(<NotFound />),
      },
    ],
  },
  {
    path: "contact",
    element: withSuspense(<ContactLayout />),
    children: [
      {
        index: true,
        element: withSuspense(<Contact />),
      },
    ],
  },
]);
