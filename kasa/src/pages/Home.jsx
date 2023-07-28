import { HeaderAndFooter } from "../components/HeaderAndFooter";
import { Banner } from "../components/Banner";
import { Gallery } from "../components/Gallery";
export const Home = () => {
  return (
    <div>
      <HeaderAndFooter
        children={
          <>
            <Banner></Banner>
            <Gallery></Gallery>
          </>
        }
      ></HeaderAndFooter>
    </div>
  );
};
