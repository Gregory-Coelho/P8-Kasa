import { Link } from "react-router-dom";

export const Card = ({ cover, title, id }) => {
  return (
    <Link className="w-full md:w-auto" to={`/accommodation/${id}`}>
      <div
        key={id}
        className={`flex items-end py-4 px-5 relative rounded-xl h-80 md:w-80 w-full bg-center bg-cover overflow-hidden`}
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/50"></div>

        <h3 className="z-10 text-white">{title}</h3>
      </div>
    </Link>
  );
};
