import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Homepage from "./pages/Homepage";
import ProjectDetailPage from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/projects/:id"
            element={<ProjectDetailPage />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;