import { HeaderAndFooter } from "../components/HeaderAndFooter";
import { NavLink } from "react-router-dom";
import error from "../assets/404.svg";
import pageDoesntExist from "../assets/pageDoesntExist.svg";

export const Error = () => {
  return (
    <HeaderAndFooter>
      <div className="flex flex-col justify-between items-center gap-14">
        <img src={error} alt="error" />
        <img
          src={pageDoesntExist}
          alt="Oups! La page que vous demandez n'existe pas."
        />
        <NavLink to="/" className="text-primary underline">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </HeaderAndFooter>
  );
};
