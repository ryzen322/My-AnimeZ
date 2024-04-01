import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ultils/ScrollToTop";

const Watch = () => {
  return (
    <div className=" w-full text-white h-auto xl:container xl:mx-auto">
      <Outlet />

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Watch;
