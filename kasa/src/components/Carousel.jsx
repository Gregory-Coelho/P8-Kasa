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
    <div className="relative rounded-3xl h-96 w-full">
      <img
        className=" absolute object-cover h-full w-full rounded-3xl"
        src={pictures[currentSlide]}
        alt="images carrousel"
      />
      <div className="inset-0 absolute w-full h-full flex justify-between items-center p-2">
        {pictures.length > 1 && (
          <img
            className=" h-full md:h-20 md:w-12 w-3"
            src={ArrowLeft}
            alt="flèche gauche"
            onClick={prevSlide}
          />
        )}

        {pictures.length > 1 && (
          <img
            className=" h-full md:h-20 md:w-12 w-3"
            src={ArrowRight}
            alt="flèche droite"
            onClick={nextSlide}
          />
        )}
      </div>

      {pictures.length > 1 && (
        <div className="hidden absolute md:flex text-white bottom-1 left-1/2  -translate-x-1/2 -translate-y-1/2">
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};
