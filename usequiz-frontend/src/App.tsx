import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/404";
import Subjects from "./pages/subjects";
import Units from "./pages/units";
import QuestionList from "./pages/questionList";
import MainLayout from "./layouts/MainLayout";
import {
  getAllQuestions,
  getQuestionsBySubject,
  getQuestionsBySubjectUnit,
} from "./services/questionService";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
    </Routes>
  );
};

export default App;
