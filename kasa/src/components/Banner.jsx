import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Banner = ({ image }) => {
  const [aboutPage, setAboutPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setAboutPage(true);
    }
  }, [location.pathname]);

  return (
    <div
      className={
        "overflow-hidden relative rounded-3xl md:h-48 h-28 flex justify-center items-center text-white text-6xl font-light mx-auto p-4"
      }
    >
      <img
        className="w-full h-full object-cover absolute inset-0"
        src={image}
        alt="banner"
      />

      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-30"></div>
      {!aboutPage && (
        <p className="z-10 font-medium md:text-5xl text-2xl">
          Chez vous, partout et ailleurs
        </p>
      )}
    </div>
  );
};
