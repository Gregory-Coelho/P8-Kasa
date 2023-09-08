import React from "react";

export const Tags = ({ tags }) => {
  return (
    <span className="flex gap-2">
      {tags.map((tag) => (
        <div
          className="bg-primary text-white md:text-xs text-[10px] md:rounded-lg rounded-md flex justify-center items-center py-1 w-28 md:h-6 h-4"
          key={tag}
        >
          {tag}
        </div>
      ))}
    </span>
  );
};
