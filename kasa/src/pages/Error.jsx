import { HeaderAndFooter } from "../components/HeaderAndFooter";
import { NavLink } from "react-router-dom";
import error from "../assets/404.svg";

export const Error = () => {
  return (
    <HeaderAndFooter>
      <div className="flex flex-col justify-between items-center gap-14">
        <img src={error} alt="error" className="w-48 md:w-[597px]" />
        <p className="w-64 md:w-[872px] text-primary md:text-4xl md:font-medium text-center">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/" className="text-primary underline">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </HeaderAndFooter>
  );
};
