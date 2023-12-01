import logo from "./logoWhite.svg";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerCard}>
      <div className={styles.footerContainer}>
        <img src={logo} alt="logo" className={styles.footerImage} />
        <p className={styles.footerText}>
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    </div>
  );
};
