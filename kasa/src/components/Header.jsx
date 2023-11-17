import { NavBar } from "./NavBar";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import styles from '../styles/Header.module.css'

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
