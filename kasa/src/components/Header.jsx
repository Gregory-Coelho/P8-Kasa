import { NavBar } from "./NavBar";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="md:mx-20 my-10 mx-4 flex justify-between items-center ">
      <Link className="hover:underline" to="/">
        <img src={logo} alt="logo" className="w-36 md:w-52" />
      </Link>
      <NavBar />
    </div>
  );
};
