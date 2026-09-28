import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/data/projectCards.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Project cards could not be loaded.");
        }

        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`${classes.projects} ${
        isVisible ? classes.visible : ""
      }`}
    >
      <div className={classes.container}>
        <div className={classes.heading}>
          <h2>Projects</h2>

          <p>
            A selection of projects I have worked on, from full-stack web
            applications to desktop software and system management tools.
          </p>
        </div>

        <div className={classes.projectGrid}>
          {projects.map((project) => (
            <article
              key={project.id}
              className={classes.projectCard}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className={classes.imageWrapper}>
                <img
                  src={`/${project.image}`}
                  alt={project.title}
                  className={classes.projectImage}
                />
              </div>

              <div className={classes.cardContent}>
                <div className={classes.titleRow}>
                  <h3>{project.title}</h3>

                  <span className={classes.arrow}>↗</span>
                </div>

                <p className={classes.description}>
                  {project.description}
                </p>

                <div className={classes.technologies}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;