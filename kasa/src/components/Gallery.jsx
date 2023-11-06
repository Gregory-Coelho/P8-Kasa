import datas from "../data/data.js";
import { Card } from "./Card";
import styles from '../styles/Gallery.module.css'

export const Gallery = () => {
  return (
    <div className={styles.galleryCard}>
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </div>
  );
};
