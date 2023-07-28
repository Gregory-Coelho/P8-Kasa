import { NavBar } from "./NavBar";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <div className="mx-20 my-10 flex justify-between items-center">
      <img src={logo} alt="logo" />
      <NavBar></NavBar>
    </div>
  );
};
