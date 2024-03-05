import { HeaderAndFooter } from "../components/HeaderAndFooter/HeaderAndFooter";
import { Banner } from "../components/Banner/Banner";
import { Gallery } from "../components/Gallery/Gallery";
import HomeImage from "../components/Banner/home.png"

export const Home = () => {
  return (
    <div>
      <HeaderAndFooter
        children={
          <>
            <Banner image={HomeImage} />
            <Gallery />
          </>
        }
      />
    </div>
  );
};
