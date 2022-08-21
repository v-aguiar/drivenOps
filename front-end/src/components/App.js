import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RandomStudent } from "./RandomStudent.js";
import { Students } from "./Students.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RandomStudent />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </Router>
  );
};

export default App;
