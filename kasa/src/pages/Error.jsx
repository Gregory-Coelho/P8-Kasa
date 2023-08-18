import { HeaderAndFooter } from "../components/HeaderAndFooter";
import { NavLink } from "react-router-dom";
import error from "../assets/404.svg";

export const Error = () => {
  return (
    <HeaderAndFooter>
      <div className="flex flex-col justify-between items-center gap-14">
        <img src={error} alt="logo" />
        <h2 className="text-primary text-4xl/[51px] font-medium">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <NavLink to="/" className="text-primary underline">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </HeaderAndFooter>
  );
};
