import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;