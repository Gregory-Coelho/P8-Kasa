import { Link } from "react-router-dom";
import { styles } from '../styles/NavBar.module.css'

export const NavBar = () => {
  return (
    <div className={styles.navBarCard}>
      <Link
        className={styles.navBarLink}
        to="/"
      >
        <p>Accueil</p>
      </Link>
      <Link
        className={styles.navBarLink}
        to="/about"
      >
        A propos
      </Link>
    </div>
  );
};
