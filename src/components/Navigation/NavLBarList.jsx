import { MdLightMode } from "react-icons/md";

import NavLink from "./NavLink";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";
import AuthUserButton from "../Auth/AuthUserButton";

const NavLBarList = ({ toggleNav }) => {
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <ul className=" absolute left-0 top-[4rem] w-full  h-screen font-Roboto xl:relative xl:top-0 xl:h-auto xl:pl-[5rem]">
      <ol className=" flex flex-col bg-primaryColor px-4 pt-2 pb-6 border-b border-white/35 gap-4 xl:pt-0 xl:pb-0 xl:flex-row xl:border-none xl:items-center xl:text-[15px] xl:font-light">
        <NavLink path="/" title={"Home"} onClick={toggleNav} />
        <NavLink path="/catalog" title={"Catalog"} onClick={toggleNav} />
        <NavLink path="/news" title={"News"} onClick={toggleNav} />
        <NavLink
          path="/collections"
          title={"Collections"}
          onClick={toggleNav}
        />
        <NavLink path="/about" title={"About"} onClick={toggleNav} />
        <NavLink path="/profile" title={"Profile"} onClick={toggleNav} />

        <div className=" flex flex-col xl:flex-row gap-4 xl:flex-1 xl:justify-end">
          <input
            className=" py-3 rounded-md px-2 outline-[1px] outline-[#0ED3CF] bg-primaryColor border border-white/35 font-light text-sm xl:w-[6rem] xl:pl-4 xl:py-[9px]"
            type="text"
            placeholder="Search"
          />

          <button className=" bg-[#0ED3CF] py-3 rounded-lg text-sm xl:w-[5rem] xl:py-[9px]">
            Submit
          </button>
          {!isSignedIn && (
            <Link
              to={"/sign-in"}
              className=" ring-1 ring-white py-3 rounded-lg text-sm text-center font-thin xl:w-[5rem] xl:py-[9px]"
            >
              Sign In
            </Link>
          )}
          {isSignedIn && (
            <button
              className=" bg-[#0ED3CF] py-3 rounded-lg text-sm xl:w-[5rem] xl:py-[9px]"
              onClick={() => signOut(() => navigate("/"))}
            >
              Sign Out
            </button>
          )}
          <button className=" bg-[#1F2937] py-3 rounded-lg text-lg flex items-center justify-center xl:w-[2.5rem] xl:py-[9px]">
            <MdLightMode />
          </button>
        </div>
      </ol>
      <div
        className=" flex-1  w-full h-full bg-primaryColor/80 xl:hidden"
        onClick={toggleNav}
      ></div>
    </ul>
  );
};

export default NavLBarList;
