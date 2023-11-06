import { Collapse } from "./Collapse";
import { Ratings } from "./Ratings";
import { Tags } from "./Tags";
import styles from '../styles/InfosAccommodation.module.css'

export const InfosAccommodation = ({
  title,
  description,
  equipments,
  location,
  hostName,
  tags,
  hostPicture,
  rating,
}) => {
  return (
    <div className={styles.infosAccommodationCard} >
      <div className={styles.infosAccommodationContainer} >
        <div className={styles.infosAccommodationTagsContainer} >
          <div className={styles.infosAccommodationTextContainer} >
            <h1 className={styles.infosAccommodationTitle} >
              {title}
            </h1 >
            <h2 className={styles.infosAccommodationText}>{location}</h2>
          </div >
          <Tags tags={tags} />
        </div >

        <div className={styles.infosAccommodationRatingsContainer}>
          <Ratings rating={rating} />
          <div className={styles.infosAccommodationRatingsTextAndImageContainer}>
            <h3 className={styles.infosAccommodationRatingsText}>
              {hostName}
            </h3>
            <img
              className={styles.infosAccommodationRatingsImage}
              src={hostPicture}
              alt="Profil"
            />
          </div>
        </div>
      </div >
      <div className={styles.infosAccommodationCollapseContainer}>
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={equipments} />
      </div>
    </div >
  );
};
