import { HeaderAndFooter } from "../components/HeaderAndFooter";
import { useParams } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import datas from "../data/data.js";
import { Error } from "./Error";

export const Accommodation = () => {
  const { id } = useParams();

  const accommodation = datas.find((accommodation) => accommodation.id === id);
  if (!accommodation) {
    return <Error />;
  }

  return (
    <HeaderAndFooter>
      <Carousel pictures={accommodation.pictures} />
    </HeaderAndFooter>
  );
};
