import { Routes, Route } from "react-router-dom";
import Subjects from "./pages/subjects";
import Units from "./pages/units";
import QuestionList from "./pages/questionList";
import {
  getQuestionsBySubject,
  getQuestionsBySubjectUnit,
} from "./services/questionService";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Subjects />} />
      <Route path="/subjects/:subject" element={<Units />} />
      <Route
        path="/subjects/:subject/:unit/questions"
        element={<QuestionList fetchFn={getQuestionsBySubjectUnit} />}
      />
      <Route
        path="/subjects/:subject/questions/"
        element={<QuestionList fetchFn={getQuestionsBySubject} />}
      />
    </Routes>
  );
};

export default App;
