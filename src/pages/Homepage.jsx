import About from "../sections/About";
import Projects from "../sections/Projects";
import Technologies from "../sections/Technologies";
import Contact from "../sections/Contact"

function Homepage() {
  return (
    <div>
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default Homepage;