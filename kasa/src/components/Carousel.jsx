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
    <div>
      <img
        className="relative h-96 object-cover w-full rounded-3xl"
        src={pictures[currentSlide]}
        alt="images carrousel"
      />
      <div className="overflow-hidden relative flex">
        {pictures.length > 1 && (
          <img
            // md:h-20 md:w-12 w-2.5 h-full
            className="absolute  bg-primary h-full  md:h-20 md:w-12 w-2.5"
            src={ArrowLeft}
            alt="flèche gauche"
            onClick={prevSlide}
          />
        )}

        {pictures.length > 1 && (
          <img
            className="absolute bg-primary h-full  md:h-20 md:w-12 w-2.5"
            src={ArrowRight}
            alt="flèche droite"
            onClick={nextSlide}
          />
        )}

        {pictures.length > 1 && (
          // hidden md:flex text-white absolute bottom-1 left-1/2  -translate-x-1/2 -translate-y-1/2
          <div className="">
            {currentSlide + 1}/{pictures.length}
          </div>
        )}
      </div>
    </div>
  );
};
