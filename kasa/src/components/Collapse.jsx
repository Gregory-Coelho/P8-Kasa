import { useState } from "react";
import arrow from "../assets/arrow.svg";
import styles from '../styles/Collapse.module.css'

export const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.collapseCard}>
      <div
        onClick={() => setToggle(!toggle)}
        className={styles.collapseContainer}
      >
        <h2>{title}</h2>
        {toggle ? <img
          className={styles.arrowDown}
          src={arrow}
          alt="flèche"
        /> :
          <img
            className={styles.arrowUp}
            src={arrow}
            alt="flèche"
          />
        }
      </div>
      {toggle && (
        <div className={styles.collapseToggle}>
          {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};
