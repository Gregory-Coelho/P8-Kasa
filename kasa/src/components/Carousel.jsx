import React, { useState } from "react";
import ArrowLeft from "../assets/arrow_left.png";
import ArrowRight from "../assets/arrow_right.png";

export const Carousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide(
      currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
    );
  }

  function prevSlide() {
    setCurrentSlide(
      currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
    );
  }
  return (
    <div className="">
      {pictures.length > 1 && (
        <img className="" src={ArrowLeft} alt="flèche" onClick={prevSlide} />
      )}

      <img src={pictures[currentSlide]} alt="images carrousel" />

      {pictures.length > 1 && (
        <img className="" src={ArrowRight} alt="flèche" onClick={nextSlide} />
      )}

      {pictures.length > 1 && (
        <div className="">
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};
