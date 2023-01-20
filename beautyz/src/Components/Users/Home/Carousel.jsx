import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Carousel.module.css";
const slideImages = [
  {
    url: "https://images-static.nykaa.com/uploads/c8047e49-1a2c-43f9-9d6e-bbe43c62f6aa.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/c84d9e2f-ec73-4d3f-922e-953ab90a415e.jpg?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/9a31555b-f600-4e97-8063-50b33e3495e2.png?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/b5803dc0-fb0a-4507-9e8a-a88c5ec99868.gif?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/4f8da256-1e17-46b6-8c74-f49919b4c158.jpg?tr=w-2400,cm-pad_resize",
  },
];


const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
const Carousel = () => {
  return (
    <div className={styles.slidecontainer}>
      <Slide {...properties} >
        {slideImages.map((slideImage, index) => (
          <div className={styles.eachslide} key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Carousel;