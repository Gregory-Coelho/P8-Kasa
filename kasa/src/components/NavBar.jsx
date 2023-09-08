import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex gap-6 md:gap-14 text-primary justify-between">
      <Link
        className="hover:underline uppercase md:normal-case text-xs md:text-2xl"
        to="/"
      >
        <p>Accueil</p>
      </Link>
      <Link
        className="hover:underline uppercase md:normal-case text-xs md:text-2xl"
        to="/about"
      >
        A propos
      </Link>
    </div>
  );
};
