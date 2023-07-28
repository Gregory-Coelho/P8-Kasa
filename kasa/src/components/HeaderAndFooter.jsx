import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const HeaderAndFooter = ({ children }) => {
  return (
    <div className="flex justify-between flex-col h-screen">
      <Header></Header>
      <div className="mx-20">{children}</div>
      <Footer></Footer>
    </div>
  );
};
