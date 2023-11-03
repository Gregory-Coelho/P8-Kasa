import { Link } from "react-router-dom";
import { styles } from '../styles/Card.module.css'

export const Card = ({ cover, title, id }) => {
  return (
    <Link className={styles.cardLink} to={`/accommodation/${id}`}>
      <div
        key={id}
        className={
          styles.cardContainer
        }
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className={styles.cardGradient}></div>

        <h3 className={styles.cardTittle}>{title}</h3>
      </div>
    </Link>
  );
};
