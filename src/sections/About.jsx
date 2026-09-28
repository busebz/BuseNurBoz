import classes from "./About.module.css";

function About() {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.content}>
        <div className={classes.left}>
          <h1>Buse Nur Boz</h1>
          <h2>A Bit About Me</h2>
          <p className={classes.description}>
            I graduated from the Computer Engineering Department in June 2024.
            My aim is to work in roles that bridge technical and business needs,
            leveraging my background in computer engineering. During my
            education, I gained hands-on experience in software development
            through internships and actively participated in volunteer
            projects. These experiences allowed me to strengthen my skills in
            communication, team collaboration, problem-solving, and analytical
            thinking.
          </p>
        </div>

        <div className={classes.right}>
          <div className={classes.imageOuter}>
            <div className={classes.imageInner}>
              <img
                src="/images/home_image.png"
                alt="Profile"
                className={classes.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;