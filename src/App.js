import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Homepage from "./pages/Homepage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import MobileImagesPage from "./pages/MobileImagesPage";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route
            path="/projects"
            element={<ProjectsPage projects={projects} />}
          />
          <Route
            path="/projects/:id/mobileImages"
            element={<MobileImagesPage projects={projects} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
