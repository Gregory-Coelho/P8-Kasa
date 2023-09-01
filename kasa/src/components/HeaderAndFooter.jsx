import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const HeaderAndFooter = ({ children }) => {
  return (
    <div className="flex justify-between flex-col h-screen">
      <Header />
      <div className="md:mx-20 mx-4">{children}</div>
      <Footer />
    </div>
  );
};
