import { NavBar } from "./NavBar";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="mx-20 my-10 flex justify-between items-center">
      <Link className="hover:underline" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <NavBar></NavBar>
    </div>
  );
};
