import { HeaderAndFooter } from "../components/HeaderAndFooter";
import { Banner } from "../components/Banner";
import AboutImage from "../assets/about.png";
import { Collapse } from "../components/Collapse";

export const About = () => {
  return (
    <div>
      <HeaderAndFooter
        children={
          <Banner image={AboutImage}>
            <div className="flex justify-between gap-20">
              <Collapse title="Description" />
              <Collapse title="Équipements" />
              <Collapse title="Équipements" />
              <Collapse title="Équipements" />
            </div>
          </Banner>
        }
      ></HeaderAndFooter>
    </div>
  );
};
