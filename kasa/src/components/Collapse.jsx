import { useState } from "react";
import arrow from "../assets/arrow.svg";

export const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div
        onClick={() => setToggle(!toggle)}
        className="bg-primary text-white md:h-12 h-8 text-xs rounded-md flex justify-between cursor-pointer justify-items-center content-center items-center p-4 w-full overflow-hidden z-10"
      >
        <h2>{title}</h2>
        <img
          className={`transition-all h-3.5 ${toggle ? "rotate-180" : ""}`}
          src={arrow}
          alt="flèche"
        />
      </div>
      {toggle && (
        <div className="bg-lightgrey text-primary  overflow-hidden transition-max-height ease-in-out duration-300 rounded-md py-4 px-5 pt-6 -mt-2 ">
          {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};
