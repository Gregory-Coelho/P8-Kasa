import React from "react";
import FullStar from "./fullStar.svg";
import EmptyStar from "./emptyStar.svg";
import styles from './Ratings.module.css'

export const Ratings = ({ rating }) => {
  return (
    <div className={styles.ratingsCard}>
      <img className={styles.star} src={rating >= 1 ? FullStar : EmptyStar} alt="Star" />
      <img className={styles.star} src={rating >= 2 ? FullStar : EmptyStar} alt="Star" />
      <img className={styles.star} src={rating >= 3 ? FullStar : EmptyStar} alt="Star" />
      <img className={styles.star} src={rating >= 4 ? FullStar : EmptyStar} alt="Star" />
      <img className={styles.star} src={rating >= 5 ? FullStar : EmptyStar} alt="Star" />
    </div>
  );
};
