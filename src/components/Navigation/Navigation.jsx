import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ScrollToTop from "../ultils/ScrollToTop";

const Navigation = () => {
  return (
    <>
      <NavBar />

      <main className="  mt-[4.65rem]">
        <Outlet />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Navigation;
