import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Banner = () => {
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
        aboutPage
          ? "bg-about rounded-3xl h-40"
          : "bg-home bg-center bg-cover rounded-3xl h-48 flex justify-center items-center text-white text-6xl font-light mx-auto"
      }
    >
      {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
    </div>
  );
};
