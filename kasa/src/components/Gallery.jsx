import datas from "../data/data.js";
import { Card } from "./Card";

export const Gallery = () => {
  return (
    <div className="flex md:gap-24 gap-4 md:bg-lightgrey flex-wrap justify-center items-center rounded-3xl md:my-10 my-5 md:p-16">
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </div>
  );
};
