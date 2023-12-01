import { HeaderAndFooter } from "../../components/HeaderAndFooter/HeaderAndFooter";
import { useParams } from "react-router-dom";
import { Carousel } from "../../components/Carousel/Carousel.jsx";
import { InfosAccommodation } from "../../components/InfosAccommodation/InfosAccommodation.jsx";
import datas from "../../data/data.js";
import { Error } from "../Error/Error.jsx";
import styles from './Accommodation.module.css'
import React from 'react';

export const Accommodation = () => {
  const { id } = useParams();

  const accommodation = datas.find((accommodation) => accommodation.id === id);
  if (!accommodation) {
    return <Error />;
  }

  return (
    <HeaderAndFooter children={
      <div className={styles.accommodationCard}>
        <Carousel pictures={accommodation.pictures} />
        <InfosAccommodation
          title={accommodation.title}
          description={accommodation.description}
          location={accommodation.location}
          hostName={accommodation.host.name}
          tags={accommodation.tags}
          hostPicture={accommodation.host.picture}
          rating={accommodation.rating}
          equipments={accommodation.equipments}
        />
      </div>
    } />
  );
};
