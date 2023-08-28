import React from "react";
import FullStar from "../assets/fullStar.svg";
import EmptyStar from "../assets/emptyStar.svg";

export const Ratings = ({ rating }) => {
  return (
    <div className="flex w-48 justify-between">
      <img src={rating >= 1 ? FullStar : EmptyStar} alt="Star" />
      <img src={rating >= 2 ? FullStar : EmptyStar} alt="Star" />
      <img src={rating >= 3 ? FullStar : EmptyStar} alt="Star" />
      <img src={rating >= 4 ? FullStar : EmptyStar} alt="Star" />
      <img src={rating >= 5 ? FullStar : EmptyStar} alt="Star" />
    </div>
  );
};
