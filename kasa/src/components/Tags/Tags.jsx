import React from "react";
import styles from './Tags.module.css'

export const Tags = ({ tags }) => {
  return (
    <span className={styles.tagsCard}>
      {
        tags.map((tag) => (
          <div
            className={styles.tagsContainer}
            key={tag}
          >
            {tag}
          </div >
        ))}
    </span >
  );
};
