import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from '../styles/HeaderAndFooter.module.css'

export const HeaderAndFooter = ({ children }) => {
  return (
    <div className={styles.headerAndFooterCard}>
      <Header />
      <div className={styles.headerAndFooterContainer}>{children}</div>
      <Footer />
    </div>
  );
};
