import { Collapse } from "./Collapse";
import { Ratings } from "./Ratings";
import { Tags } from "./Tags";

export const InfosAccommodation = ({
  title,
  description,
  equipments,
  location,
  hostName,
  tags,
  hostPicture,
  rating,
}) => {
  return (
    <div className="flex flex-col gap-5 my-5">
      <div className="md:flex md:justify-between flex flex-col gap-4">
        <div className="text-primary flex justify-between flex-col gap-2 md:gap-3">
          <div className="flex gap-1 flex-col">
            <h1 className="text-4xl md:font-medium font-normal">{title}</h1>
            <h2 className="text-lg md:font-normal">{location}</h2>
          </div>
          <Tags tags={tags} />
        </div>

        <div className="md:flex md:flex-col-reverse  flex justify-between ">
          <Ratings rating={rating} />
          <div className="md:flex  items-center flex md:justify-end">
            <h3 className="m-3 text-primary text-right w-min">{hostName}</h3>
            <img
              className="rounded-full w-16 h-16"
              src={hostPicture}
              alt="Profil"
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between md:gap-20 md:flex-row gap-5 flex justify-between flex-col">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={equipments} />
      </div>
    </div>
  );
};
