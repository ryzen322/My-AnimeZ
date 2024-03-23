import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackgroundUi from "../LoadingUI.jsx/BackgroundUi";
import { useState } from "react";
import ReactPlayer from "react-player";

const WatchCards = ({ item }) => {
  const [playing, setPlaying] = useState(true);

  const { image, title, status, rating, malId, id } = item;

  return (
    <>
      <li
        className={`h-[17rem] ${
          playing ? "min-w-[13rem]" : "min-w-[26rem]"
        } bg-slate-600 rounded-lg overflow-hidden relative transition-all duration-200 ease-in `}
      >
        {playing ? (
          <>
            <img
              className=" w-full h-full object-cover rounded-lg relative z-10 top-0 left-0 right-0 bottom-0"
              src={image}
              alt=""
            />
            <div className=" absolute z-30 h-full w-full top-0 left-0 right-0 bottom-0 p-1 flex flex-col">
              <div className=" flex justify-end gap-2 p-1 px-2">
                <FaRegBookmark className=" text-white text-[1.25rem]  cursor-pointer" />
              </div>
              <div className=" flex-1 flex flex-col justify-end px-1 gap-1 py-1">
                <h1 className=" text-sm font-bold">{title?.english}</h1>
                <p className=" text-xs text-stone-400">Rating: {rating}</p>
                <p className=" text-xs text-stone-400">Status: {status}</p>

                <Link
                  to={`/play/${id}`}
                  className=" bg-white text-black rounded-md flex justify-center items-center text-sm font-bold py-1 mt-2 hover:bg-white/60"
                >
                  Play
                </Link>
              </div>
            </div>
          </>
        ) : (
          <ReactPlayer
            width="100%"
            height="100%"
            playing={true}
            volume={0.9}
            url={`https://www.youtube.com/watch?v=RzmFKUDOUgw`}
          />
        )}

        <BackgroundUi />
      </li>
    </>
  );
};

export default WatchCards;
