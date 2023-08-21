import { Ratings } from "./Ratings";
import { Tags } from "./Tags";

export const InfosAccommodation = ({
  title,
  description,
  location,
  hostName,
  tags,
  hostPicture,
  rating,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-primary ">
          <h1 className="text-4xl font-medium">{title}</h1>
          <h2 className="text-lg font-medium">{location}</h2>
        </div>

        <div className="flex justify-between justify-items-center items-center">
          <h3 className="m-3">{hostName}</h3>
          <img
            className="rounded-full w-16 h-16"
            src={hostPicture}
            alt="Profil"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Tags tags={tags} />
        <Ratings rating={rating} />
      </div>
    </div>
  );
};
