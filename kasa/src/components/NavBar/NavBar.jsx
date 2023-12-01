import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

export const NavBar = () => {
  const pathName = window.location.pathname;

  return (
    <div className={styles.navBarCard}>
      <Link
        className={pathName === "/" ? styles.navBarLinkActive : styles.navBarLink}
        to="/"
      >
        Accueil
      </Link>
      <Link
        className={pathName === "/about" ? styles.navBarLinkActive : styles.navBarLink}
        to="/about"
      >
        A propos
      </Link>
    </div>
  );
};
