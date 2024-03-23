import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Watch = () => {
  return (
    <div className=" w-full text-white h-auto xl:container xl:mx-auto">
      <Outlet />

      {/* <Footer /> */}
    </div>
  );
};

export default Watch;
