import React, { useState, useEffect } from "react";
/* import { useSelector } from "react-redux";
import { getCourses5Stars } from "../../actions/getCourses5Stars"; */
import "./Slider.css";
/* import images from "./Carruselimg.json"; */
import images from "./coursesProvisorios.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carrusel() {
  /* const courses5Stars = useSelector((state) => state.getCourses5Stars); */
  const [slideIndex, setSlideIndex] = useState(1);
  function nextSlide() {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  }

  useEffect(() => {
    setTimeout(nextSlide, 3000); // eslint-disable-next-line
  }, [slideIndex]);
  /* 
  return (
    <div className="container-slider">
      {images.map((obj, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.image} alt={obj.adress} />
          </div>
        );
      })}
    </div>
  ); */
  return (
    <div className="container-slider">
      {images.map((obj, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.img} alt={obj.title} />
          </div>
        );
      })}
    </div>
  );
}
