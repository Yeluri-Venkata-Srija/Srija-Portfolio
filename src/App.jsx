import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";

import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;