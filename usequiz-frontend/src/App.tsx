import { Routes, Route } from "react-router-dom";
import Subjects from "./pages/subjects";
import Units from "./pages/units";
import QuestionList from "./pages/questionList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Subjects />} />
      <Route path="/subjects/:subject" element={<Units />} />
      <Route
        path="/subjects/:subject/:unit/questions"
        element={<QuestionList />}
      />
    </Routes>
  );
};

export default App;
