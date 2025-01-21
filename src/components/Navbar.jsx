import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.left}>
          <i className="fa-solid fa-circle"></i>
          <h2>
            <Link to="/">Buse Nur Boz</Link>
          </h2>
          <p>
            <Link to="/">Computer Engineer</Link>
          </p>
        </div>
        <div className={classes.right}>
          <p>
            <Link to="/resume">Resume</Link>
          </p>
          <p>
            <Link to="/projects">Projects</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
