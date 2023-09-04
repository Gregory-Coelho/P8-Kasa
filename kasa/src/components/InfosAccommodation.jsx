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
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="text-primary ">
          <h1 className="text-4xl font-medium">{title}</h1>
          <h2 className="text-lg font-medium">{location}</h2>
        </div>

        <div className="md:flex md:justify-between md:justify-items-center items-center">
          <h3 className="m-3 text-primary text-right w-min">{hostName}</h3>
          <img
            className="rounded-full w-16 h-16"
            src={hostPicture}
            alt="Profil"
          />
        </div>
      </div>
      <div className="md:flex md:justify-between">
        <Tags tags={tags} />
        <Ratings rating={rating} />
      </div>
      <div className="md:flex md:justify-between md:gap-20">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={equipments} />
      </div>
    </div>
  );
};
