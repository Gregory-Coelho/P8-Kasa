import React, { useState } from "react";
import ArrowLeft from "../assets/arrowLeft.svg";
import ArrowRight from "../assets/arrowRight.svg";

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
    <div className="relative">
      {pictures.length > 1 && (
        <img
          className="absolute top-1/2 left-10 -translate-x-1/2 -translate-y-1/2"
          src={ArrowLeft}
          alt="flèche gauche"
          onClick={prevSlide}
        />
      )}

      <img
        className="h-96 object-cover w-full rounded-3xl"
        src={pictures[currentSlide]}
        alt="images carrousel"
      />

      {pictures.length > 1 && (
        <img
          className="absolute top-1/2 right-0  -translate-x-1/2 -translate-y-1/2"
          src={ArrowRight}
          alt="flèche droite"
          onClick={nextSlide}
        />
      )}

      {pictures.length > 1 && (
        <div className=" text-white absolute bottom-1 left-1/2  -translate-x-1/2 -translate-y-1/2">
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};
