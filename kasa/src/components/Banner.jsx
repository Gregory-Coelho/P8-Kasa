import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {styles} from '../styles/Banner.module.css'

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
     styles.bannerCard
      }
    >
      <img
        className={styles.bannerImage}
        src={image}
        alt="banner"
      />

      <div className={styles/bannerTextFrame}></div>
      {!aboutPage && (
        <p className={styles.bannerText}>
          Chez vous, partout et ailleurs
        </p>
      )}
    </div>
  );
};
