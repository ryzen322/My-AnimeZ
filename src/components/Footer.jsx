import FooterIcons from "./FooterIcons";

import Link from "./LoadingUI.jsx/Links";

const Footer = () => {
  return (
    <footer className=" grid grid-cols-1 w-full h-auto mt-[3rem] p-2 border-t border-[#cccc] font-Roboto sm:grid-cols-2">
      <div className=" flex flex-col text-[#FFFFFF] px-3 my-5 gap-7">
        <div className=" flex flex-col gap-2 sm:text-center">
          <h1 className=" text-3xl font-bold">Stay in Touch</h1>
          <p className=" text-lg font-medium">
            Stay up to date and don't miss a things.
          </p>
        </div>
        <div className=" flex flex-col gap-2 ">
          <input
            className=" py-3 rounded-md text-black px-3 font-semibold"
            type="text"
          />
          <button className=" bg-[#ffff] py-3 rounded-md text-black/85 font-bold">
            Notify Me
          </button>
        </div>
      </div>
      <div className=" flex flex-col  gap-2">
        <ul className=" mt-4 text-white flex justify-center flex-wrap mb-4 gap-4 sm:gap-1">
          <Link>Home</Link>
          <Link>Contact</Link>
          <Link>Community</Link>
          <Link>Account</Link>
          <Link>Profile</Link>
          <Link>Subscribe</Link>
        </ul>
        <FooterIcons />
      </div>
      <div className=" h-[2rem] my-[5rem] flex flex-col items-center justify-center text-white  text-sm font-bold sm:col-span-2">
        <h1 className=" text-2xl">My Anime</h1>
        <p className=" font-thin text-normal text-gray-500 hover:text-white cursor-pointer">
          Inc. 2024 All Rights Reservered
        </p>
        <p className=" font-thin text-normal text-gray-500 hover:text-white cursor-pointer">
          Legal
        </p>
        <p className=" font-thin text-normal text-gray-500 hover:text-white cursor-pointer">
          Privacy Policy
        </p>
        <p className=" font-thin text-normal text-gray-500 hover:text-white cursor-pointer">
          Manage Cookie Preferences
        </p>
      </div>
    </footer>
  );
};

export default Footer;
