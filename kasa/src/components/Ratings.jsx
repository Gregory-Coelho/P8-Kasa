import React from "react";
import FullStar from "../assets/fullStar.svg";
import EmptyStar from "../assets/emptyStar.svg";

export const Ratings = ({ rating }) => {
  const logicRating = (rating) => {
    const numberOfEmptyStars = 5 - Number(rating);
    return;

    // Number(rating) * <img className="" src={FullStar} alt="étoile pleine" />
  };
  return <div className="">{logicRating(rating)}</div>;
};
