import { Link } from "react-router-dom";

export const Card = ({ cover, title, id }) => {
  return (
    <div>
      <Link to={`/accommodation/${id}`}>
        <div
          key={id}
          className={`rounded-xl h-80 w-80 bg-center bg-cover`}
          style={{
            backgroundImage: `url(${cover})`,
          }}
        >
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
};
