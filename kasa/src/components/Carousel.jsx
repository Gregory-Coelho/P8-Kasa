import React, { useState } from "react";
import ArrowLeft from "../assets/arrowLeft.svg";
import ArrowRight from "../assets/arrowRight.svg";
import styles from '../styles/Carousel.module.css'

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
    <div className={styles.carouselCard}>
      <img
        className={styles.carouselImage}
        src={pictures[currentSlide]}
        alt="images carrousel"
      />
      <div className={styles.carouselArrowContainer}>
        {pictures.length > 1 && (
          <img
            className={styles.carouselArrowLeft}
            src={ArrowLeft}
            alt="flèche gauche"
            onClick={prevSlide}
          />
        )}

        {pictures.length > 1 && (
          <img
            className={styles.carouselArrowRight}
            src={ArrowRight}
            alt="flèche droite"
            onClick={nextSlide}
          />
        )}
      </div>

      {pictures.length > 1 && (
        <div className={styles.carouselCounter}>
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};
