import { useEffect, useRef, useState } from "react";

import { MdOutlineMenu } from "react-icons/md";
import NavLBarList from "./NavLBarList";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const ref = useRef(null);

  function toggleNav() {
    setNavToggle((prev) => !prev);
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const { offsetWidth } = ref.current;

      if (offsetWidth > 1024) {
        setNavToggle(true);
      } else {
        setNavToggle(false);
      }
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <nav
      ref={ref}
      className=" py-3 border-b border-stone-500/50 flex items-center justify-between z-50 flex-row-reverse fixed top-0 left-0 right-0 font-Roboto text-white/75 bg-primaryColor text-normal font-semibold lg:container lg:mx-auto xl:flex-row xl:py-4"
    >
      <button
        onClick={toggleNav}
        className={` mr-2 py-3 px-4 rounded-md text-[25px] xl:hidden`}
      >
        <MdOutlineMenu />
      </button>
      <h1 className=" text-[21px] font-semibold ml-3 flex-shrink-0">
        やっつける
      </h1>

      {navToggle && <NavLBarList toggleNav={toggleNav} />}
    </nav>
  );
};

export default NavBar;
