import datas from "../data/data.js";
import { Card } from "./Card";

export const Gallery = () => {
  return (
    <div className="flex gap-24 bg-lightgrey flex-wrap justify-center items-center rounded-3xl my-10 p-16">
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
