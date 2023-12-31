import { HeaderAndFooter } from "../../components/HeaderAndFooter/HeaderAndFooter";
import { Banner } from "../../components/Banner/Banner";
import AboutImage from "../../components/Banner/about.png";
import { Collapse } from "../../components/Collapse/Collapse";
import styles from './About.module.css'

export const About = () => {
  const aboutDetails = [
    {
      id: 0,
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 1,
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 2,
      title: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 3,
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div>
      <HeaderAndFooter
        children={
          <>
            <Banner image={AboutImage} />
            <div className={styles.aboutCard}>
              {aboutDetails.map((item) => {
                return (
                  <Collapse
                    key={item.id}
                    title={item.title}
                    content={item.text}
                  />
                );
              })}
            </div>
          </>
        }
      />
    </div>
  );
};
