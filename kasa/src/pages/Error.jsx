import { HeaderAndFooter } from "../components/HeaderAndFooter";
import { NavLink } from "react-router-dom";
import error from "../assets/404.svg";
import styles from '../styles/Error.module.css'


export const Error = () => {
  return (
    <HeaderAndFooter>
      <div className={styles.errorCard}>
        <img src={error} alt="error" className="errorImage" />
        <p className={styles.errorText}>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/" className={styles.errorLink}>
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </HeaderAndFooter>
  );
};
