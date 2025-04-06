import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import {
  getAllQuestions,
  getQuestionsBySubject,
  getQuestionsBySubjectUnit,
} from "../services/questionService";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const NotFound = lazy(() => import("../pages/404"));
const Subjects = lazy(() => import("../pages/subjects"));
const Units = lazy(() => import("../pages/units"));
const QuestionList = lazy(() => import("../pages/questionList"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const ContactLayout = lazy(() => import("../layouts/ContactLayout"));

const CRouter = () => {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route
            path="/questions"
            element={<QuestionList fetchFn={getAllQuestions} />}
          />
          <Route path="/subjects/:subject" element={<Units />} />
          <Route
            path="/subjects/:subject/:unit/questions"
            element={<QuestionList fetchFn={getQuestionsBySubjectUnit} />}
          />
          <Route
            path="/subjects/:subject/questions/"
            element={<QuestionList fetchFn={getQuestionsBySubject} />}
          />
        </Route>
        <Route path="/contact" element={<ContactLayout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default CRouter;
