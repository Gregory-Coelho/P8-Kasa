import { HeaderAndFooter } from "../components/HeaderAndFooter";
import { Banner } from "../components/Banner";

export const About = () => {
  return (
    <div>
      <HeaderAndFooter children={<Banner></Banner>}></HeaderAndFooter>
    </div>
  );
};
