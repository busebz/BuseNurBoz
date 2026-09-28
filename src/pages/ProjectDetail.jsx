import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import {
  FiGlobe,
  FiMail,
  FiLock,
  FiChevronDown,
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import classes from "./ProjectDetail.module.css";

function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const visibleThumbnailCount = 4;

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Projects could not be loaded.");
        }

        return response.json();
      })
      .then((data) => {
        const selectedProject = data.find(
          (projectItem) => projectItem.id === id
        );

        setProject(selectedProject || null);
        setActiveImageIndex(0);
        setThumbnailStartIndex(0);
        setIsLoginOpen(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!project) return null;

  const updateThumbnailPosition = (imageIndex) => {
    if (project.images.length <= visibleThumbnailCount) {
      return;
    }

    if (imageIndex < thumbnailStartIndex) {
      setThumbnailStartIndex(imageIndex);
      return;
    }

    if (imageIndex >= thumbnailStartIndex + visibleThumbnailCount) {
      setThumbnailStartIndex(
        Math.min(
          imageIndex - visibleThumbnailCount + 1,
          project.images.length - visibleThumbnailCount
        )
      );
    }
  };

  const previousImage = () => {
    const newIndex =
      activeImageIndex === 0
        ? project.images.length - 1
        : activeImageIndex - 1;

    setActiveImageIndex(newIndex);
    updateThumbnailPosition(newIndex);
  };

  const nextImage = () => {
    const newIndex =
      activeImageIndex === project.images.length - 1
        ? 0
        : activeImageIndex + 1;

    setActiveImageIndex(newIndex);
    updateThumbnailPosition(newIndex);
  };

  const selectImage = (index) => {
    setActiveImageIndex(index);
    updateThumbnailPosition(index);
  };

  const handleBackToProjects = () => {
    navigate("/");

    setTimeout(() => {
      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const visibleImages = project.images.slice(
    thumbnailStartIndex,
    thumbnailStartIndex + visibleThumbnailCount
  );

  return (
    <section className={classes.projectDetail}>
      <div className={classes.container}>
        <button
          type="button"
          className={classes.backButton}
          onClick={handleBackToProjects}
        >
          <span className={classes.backArrow}>
            <FiArrowLeft />
          </span>

          <span className={classes.backText}>Back to Projects</span>
        </button>

        <div className={classes.content}>
          <div className={classes.projectInfo}>
            <h1>{project.title}</h1>

            <div className={classes.description}>
              <p>{project.description.part1}</p>

              {project.description.part2 && (
                <p>{project.description.part2}</p>
              )}
            </div>

            <div className={classes.actionArea}>
              <div className={classes.actions}>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.actionButton} ${classes.githubButton}`}
                >
                  <span className={classes.githubIcon}>
                    <FaGithub />
                  </span>

                  View on GitHub

                  <span className={classes.externalIcon}>→</span>
                </a>

                {project.siteLink && (
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`${classes.actionButton} ${classes.liveButton}`}
                  >
                    <span className={classes.webIcon}>
                      <FiGlobe />
                    </span>

                    Visit Live Site

                    <span className={classes.externalIcon}>→</span>
                  </a>
                )}
              </div>

              {project.loginInfo && (
                <div
                  className={`${classes.loginInfo} ${
                    isLoginOpen ? classes.loginInfoOpen : ""
                  }`}
                >
                  <button
                    type="button"
                    className={classes.loginToggle}
                    onClick={() =>
                      setIsLoginOpen((current) => !current)
                    }
                    aria-expanded={isLoginOpen}
                  >
                    <span className={classes.loginMainIcon}>
                      <FiLock />
                    </span>

                    <span className={classes.loginToggleTitle}>
                      Demo Login
                    </span>

                    <span
                      className={`${classes.loginChevron} ${
                        isLoginOpen ? classes.loginChevronOpen : ""
                      }`}
                    >
                      <FiChevronDown />
                    </span>
                  </button>

                  <div
                    className={`${classes.loginContent} ${
                      isLoginOpen ? classes.loginContentOpen : ""
                    }`}
                  >
                    <div className={classes.loginContentInner}>
                      <div className={classes.credentialItem}>
                        <span className={classes.credentialIcon}>
                          <FiMail />
                        </span>

                        <div className={classes.credentialText}>
                          <span>Email</span>
                          <p>{project.loginInfo.email}</p>
                        </div>
                      </div>

                      <div className={classes.credentialDivider}></div>

                      <div className={classes.credentialItem}>
                        <span className={classes.credentialIcon}>
                          <FiLock />
                        </span>

                        <div className={classes.credentialText}>
                          <span>Password</span>
                          <p>{project.loginInfo.password}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={classes.galleryArea}>
            <div className={classes.galleryCard}>
              <div className={classes.mainImageArea}>
                <div className={classes.mainImageWrapper}>
                  <img
                    src={`/${project.images[activeImageIndex]}`}
                    alt={`${project.title} ${activeImageIndex + 1}`}
                    className={classes.mainImage}
                  />
                </div>

                {project.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className={`${classes.mainImageArrow} ${classes.mainImageArrowLeft}`}
                      onClick={previousImage}
                      aria-label="Previous image"
                    >
                      <FiChevronLeft />
                    </button>

                    <button
                      type="button"
                      className={`${classes.mainImageArrow} ${classes.mainImageArrowRight}`}
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <FiChevronRight />
                    </button>
                  </>
                )}
              </div>

              {project.images.length > 1 && (
                <>
                  <div className={classes.thumbnailSection}>
                    <div className={classes.thumbnailGrid}>
                      {visibleImages.map((image, index) => {
                        const realIndex = thumbnailStartIndex + index;

                        return (
                          <button
                            type="button"
                            key={`${image}-${realIndex}`}
                            className={`${classes.thumbnailButton} ${
                              activeImageIndex === realIndex
                                ? classes.activeThumbnail
                                : ""
                            }`}
                            onClick={() => selectImage(realIndex)}
                            aria-label={`View image ${realIndex + 1}`}
                          >
                            <img
                              src={`/${image}`}
                              alt={`${project.title} thumbnail ${
                                realIndex + 1
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className={classes.galleryDots}>
                    {project.images.map((image, index) => (
                      <button
                        type="button"
                        key={`dot-${image}-${index}`}
                        className={`${classes.galleryDot} ${
                          activeImageIndex === index
                            ? classes.activeGalleryDot
                            : ""
                        }`}
                        onClick={() => {
                          setActiveImageIndex(index);

                          if (
                            index < thumbnailStartIndex ||
                            index >=
                              thumbnailStartIndex + visibleThumbnailCount
                          ) {
                            const newStart = Math.min(
                              index,
                              Math.max(
                                0,
                                project.images.length -
                                  visibleThumbnailCount
                              )
                            );

                            setThumbnailStartIndex(newStart);
                          }
                        }}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailPage;