import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Navigation = () => {
  return (
    <>
      <NavBar />

      <main className="  mt-[4.65rem]">
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;
