import { Routes, Route } from "react-router-dom";
import Subjects from "./pages/subjects";
import Units from "./pages/units";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Subjects />} />
      <Route path="/subjects/:subject" element={<Units />} />
    </Routes>
  );
};

export default App;
