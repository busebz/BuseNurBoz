import React, { useState, useEffect } from "react";
import classes from "./Modal.module.css";

const Modal = ({ imageSrc, onClose }) => {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      setImageDimensions({ width: image.width, height: image.height });
    };
  }, [imageSrc]);

  return (
    <div className={classes.modal} onClick={onClose}>
      <div className={classes.modalContent}>
        <img
          className={classes.enlargedImage}
          src={imageSrc}
          alt="Enlarged"
          style={{
            width: imageDimensions.width < 800 ? "100%" : "auto",
            height: imageDimensions.height < 800 ? "90vh" : "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
