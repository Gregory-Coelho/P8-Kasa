import { HeaderAndFooter } from "../components/HeaderAndFooter";
import { Banner } from "../components/Banner";
import { Gallery } from "../components/Gallery";
import HomeImage from "../assets/home.png";

export const Home = () => {
  return (
    <div>
      <HeaderAndFooter
        children={
          <>
            <Banner image={HomeImage}></Banner>
            <Gallery></Gallery>
          </>
        }
      ></HeaderAndFooter>
    </div>
  );
};
