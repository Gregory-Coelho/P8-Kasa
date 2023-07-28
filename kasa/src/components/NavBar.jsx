import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex w-[150px] text-primary justify-between">
      <Link className="hover:underline" to="/">
        Accueil
      </Link>
      <Link className="hover:underline" to="/about">
        A propos
      </Link>
    </div>
  );
};
