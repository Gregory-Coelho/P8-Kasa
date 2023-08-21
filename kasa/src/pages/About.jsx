import { HeaderAndFooter } from "../components/HeaderAndFooter";
import { Banner } from "../components/Banner";
import AboutImage from "../assets/about.png";

export const About = () => {
  return (
    <div>
      <HeaderAndFooter
        children={<Banner image={AboutImage}></Banner>}
      ></HeaderAndFooter>
    </div>
  );
};
