import BackgroundUi from "../LoadingUI.jsx/BackgroundUi";
import { IoBookmarkOutline, IoStarHalf } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import LoadingHeading from "../LoadingUI.jsx/LoadingHeading";
import { FaPlay } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { playEpisodes } from "../Api/animeSlice";

const WatchHeading = ({ loading, data = {}, paramID }) => {
  const dispatch = useDispatch();

  if (loading) {
    return <LoadingHeading />;
  }

  const playAnime = () => {
    dispatch(playEpisodes(data?.episodes[0]?.id));
  };

  return (
    <>
      <div className=" w-full h-[18.5rem] relative rounded-md overflow-hidden">
        <picture>
          <source media="(min-width:768px)" srcSet={data.cover} />
          <img
            className=" w-full h-full object-cover rounded-md"
            src={data?.trailer?.thumbnail || data?.image}
          />
        </picture>
        <BackgroundUi />
      </div>
      <div className="flex p-2 gap-1 md:gap-6 lg:gap-9">
        <div className=" w-[13rem] h-[20rem] relative rounded-md md:w-[16rem] md:h-[23rem] overflow-hidden cursor-pointer group lg:w-[17.5rem] lg:h-[24rem] lg:-top-[8.5rem] lg:z-30 shadow-2xl lg:ml-[2.5rem] xl:ml-[5rem]">
          <img
            className=" w-full h-full object-cover overflow-hidden rounded-md"
            src={data.image}
            alt=""
          />
          <div className=" absolute z-30 top-0 left-0 right-0 bottom-0 h-full w-full flex justify-center items-center">
            <div className=" h-[4.5rem] w-[4.5rem] bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out flex items-center justify-center">
              <Link to={`/watch/play/${paramID?.id}`} onClick={playAnime}>
                <FaPlay
                  size={"35"}
                  className=" text-stone-400 hover:text-white transition-all duration-200"
                />
              </Link>
            </div>
          </div>
          <BackgroundUi />
        </div>
        <div
          className=" flex flex-col flex-1 gap-3
         px-3 py-2 lg:gap-5 lg:mt-5 lg:pr-[4rem]"
        >
          <h1 className=" text-2xl font-bold md:text-4xl">
            {data?.title?.english}
          </h1>
          <p className=" flex items-center gap-2 font-medium md:text-lg">
            <IoStarHalf />
            8.25
          </p>

          <div className=" flex flex-wrap gap-2 ">
            <Link className=" px-3 h-[2.7rem] bg-[#242424] rounded-md text-sm font-medium flex items-center  gap-2">
              <MdOutlineRemoveRedEye size={"15px"} /> Watching
            </Link>
            <Link className=" px-3 h-[2.7rem] bg-[#242424] rounded-md text-sm font-medium flex items-center  gap-2">
              <IoBookmarkOutline size={"18px"} /> To Watch
            </Link>
            <Link className=" px-3 h-[2.7rem] bg-[#242424] rounded-md text-sm font-medium flex items-center  gap-2">
              <IoBookmarkOutline size={"18px"} /> To Watch
            </Link>
            <Link className=" px-3 h-[2.7rem] bg-[#242424] rounded-md text-sm font-medium flex items-center  gap-2 lg:ml-auto">
              <FaCheck size={"18px"} /> Add To Collection
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchHeading;
