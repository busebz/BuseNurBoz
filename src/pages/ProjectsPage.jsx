import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Modal from "../components/Modal";
import classes from "./ProjectsPage.module.css";

const Projects = ({ projects }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openLoginInfoId, setOpenLoginInfoId] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleImageClick = (imageSrc) => setSelectedImage(imageSrc);
  const handleCloseModal = () => setSelectedImage(null);

  return (
    <div className={classes.projects}>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className={classes.project}>
          <div className={classes.description}>
            <h2>{project.title}</h2>
            <p className={classes.text}>{project.description.part1}</p>
            <p className={classes.text}>{project.description.part2}</p>
            {project.loginInfo && (
              <>
                <button
                  className={classes.toggleLoginBtn}
                  onClick={() =>
                    setOpenLoginInfoId(
                      openLoginInfoId === project.id ? null : project.id
                    )
                  }
                >
                  {openLoginInfoId === project.id
                    ? "Hide Demo Login Info"
                    : "Show Demo Login Info"}
                </button>

                {openLoginInfoId === project.id && (
                  <div className={classes.loginInfoBox}>
                    <strong>🛡️ Demo Login Info:</strong>
                    <br />
                    <strong>Email:</strong> {project.loginInfo.email}
                    <br />
                    <strong>Password:</strong> {project.loginInfo.password}
                    <br />
                    <em>
                      This login is provided for demo purposes only. No data is
                      stored.
                    </em>
                  </div>
                )}
              </>
            )}
            <div className={classes.links}>
              <p>
                Project Link:{" "}
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
              {project.siteLink && (
                <p>
                  Site Link:{" "}
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.siteLink.replace(/^https?:\/\//, "")}
                  </a>
                </p>
              )}
            </div>
          </div>
          <div className={classes.images}>
            <Slider {...sliderSettings}>
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={classes.image}
                  onClick={() => handleImageClick(`/${image}`)}
                >
                  <img src={`/${image}`} alt={`${project.title}`} />
                </div>
              ))}
            </Slider>
            {project.mobileImages && (
              <p>
                Go to mobile versions:{" "}
                <Link to={`/projects/${project.id}/mobileImages`}>
                  Mobile versions
                </Link>
              </p>
            )}
          </div>
        </div>
      ))}
      {selectedImage && (
        <Modal imageSrc={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Projects;
