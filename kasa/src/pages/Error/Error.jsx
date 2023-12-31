import { HeaderAndFooter } from "../../components/HeaderAndFooter/HeaderAndFooter";
import { NavLink } from "react-router-dom";
import error from "./404.svg";
import styles from './Error.module.css'


export const Error = () => {
  return (
    <HeaderAndFooter>
      <div className={styles.errorCard}>
        <img src={error} alt="error" className={styles.errorImage} />
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
