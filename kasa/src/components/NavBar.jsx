import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex w-150 text-coral justify-between">
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </div>
  );
};
