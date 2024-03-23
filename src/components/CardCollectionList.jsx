import { FaBookmark } from "react-icons/fa6";

import { FaPlay } from "react-icons/fa";
import { useState } from "react";

// export default CardCollectionList;

const CardCollectionList = ({ img, thumbnail, title }) => {
  return (
    <div
      className={` h-[17rem] w-[33.33%] hover:w-[100%] transition-all duration-500 ease-in-out rounded-lg overflow-hidden cursor-pointer relative group`}
    >
      <img
        loading="lazy"
        className=" w-full h-full object-cover scale-100 group-hover:hidden"
        src={img}
        alt=""
      />
      <img
        loading="lazy"
        className=" w-full h-full object-cover scale-100 hidden group-hover:block"
        src={thumbnail}
        onError={(e) => {
          e.currentTarget.src = { img };
          e.currentTarget = null;
        }}
        alt=""
      />
      <div className=" w-full h-full absolute top-0 left-0 right-0 bg-gradient-to-t from-black/40 z-20" />
      <div className=" absolute w-full group-hover:h-full opacity-0 group-hover:opacity-100 transition-all duration-200 top-0 left-0 right-0 bottom-0 flex flex-col py-3 z-30">
        <div className=" w-full p-2 flex justify-end ">
          <FaBookmark className=" hidden group-hover:block" />
        </div>
        <div className=" px-3 h-full flex flex-col justify-center text-white">
          <div className=" ">
            <h1 className=" text-2xl text-white font-bold">{title}</h1>
            <p className=" text-sm  font-bold">2021 - 1 season - Netflix</p>
          </div>
        </div>
        <div className=" absolute inset-0 w-[5rem] h-[5rem] mx-auto my-auto bg-black/65 rounded-full z-10 flex items-center justify-center hover:bg-black text-yellow-200/65 hover:text-yellow-200">
          <FaPlay size={"35px"} className=" text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default CardCollectionList;
