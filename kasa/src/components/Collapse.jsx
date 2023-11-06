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
        <img
          className={`
          height: 0.875rem;
transition-property: all;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 300ms;
          ${toggle ? "--transform-rotate: 180deg; " : ""}`}
          src={arrow}
          alt="flèche"
        />
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
