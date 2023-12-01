import { NavBar } from "../NavBar/NavBar";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.headerCard}>
      <Link className={styles.headerLink} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <NavBar />
    </div>
  );
};
