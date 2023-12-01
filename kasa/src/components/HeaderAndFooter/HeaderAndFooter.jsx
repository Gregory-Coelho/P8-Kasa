import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from './HeaderAndFooter.module.css'

export const HeaderAndFooter = ({ children }) => {
  return (
    <div className={styles.headerAndFooterCard}>
      <Header />
      <div className={styles.headerAndFooterContainer}>{children}</div>
      <Footer />
    </div>
  );
};
