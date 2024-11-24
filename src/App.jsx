import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => <h1 className="text-center text-3xl">Welcome to NebulaQuest 🚀</h1>;
const About = () => <h1 className="text-center text-3xl">About NebulaQuest</h1>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
