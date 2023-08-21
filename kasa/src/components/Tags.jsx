import React from "react";

export const Tags = ({ tags }) => {
  return (
    <span className="flex gap-2">
      {tags.map((tag) => (
        <div
          className="bg-primary text-white text-xs rounded-lg flex justify-center items-center py-1 w-28 h-6"
          key={tag}
        >
          {tag}
        </div>
      ))}
    </span>
  );
};
