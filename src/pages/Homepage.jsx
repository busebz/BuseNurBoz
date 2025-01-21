import { Link } from "react-router-dom";
import classes from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={classes.homepage}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img src="/images/home_image.png" alt="" />
        </div>
      </div>
      <div className={classes.right}>
        <h1>Buse Nur Boz</h1>
        <h4>A Bit About Me</h4>
        <p>
        I graduated from the Computer Engineering Department in June 2024. My aim is to work in roles that 
        bridge technical and business needs, leveraging my background in computer engineering. 
        During my education, I gained hands-on experience in software development through internships 
        and actively participated in volunteer projects. These experiences allowed me to strengthen 
        my skills in communication, team collaboration, problem-solving, and analytical thinking.
        </p>
        <div className={classes.circles}>
          <Link to="/resume" className={classes.circle1}>
            Resume
          </Link>
          <Link to="/projects" className={classes.circle2}>
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
