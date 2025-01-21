import { useParams } from "react-router-dom";
import classes from "./MobileImagesPage.module.css";

function MobileImagesPage({ projects }) {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className={classes.mobileImages}>
      <h1>Mobile Images</h1>
      <div className={classes.mobilImage}>
        {project.mobileImages.map((image, index) => (
          <div key={index} className={classes.image}>
            <img src={`/${image}`} alt={`${project.title}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileImagesPage;
