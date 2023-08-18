import logo from "../assets/logoWhite.svg";

export const Footer = () => {
  return (
    <div className="bg-black flex items-center flex-col w-screen justify-center mt-5">
      <div className="mt-10 mb-5 flex items-center flex-col justify-center gap-5">
        <img src={logo} alt="logo" />
        <p className="text-white">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};
