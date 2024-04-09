import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { FaRegBookmark } from "react-icons/fa";

const HeroPlayer = ({ isLoading }) => {
  const { playerObject, player } = useSelector((state) => state.anime);

  return (
    <div className=" h-[25rem] w-full overflow-hidden  ">
      {player ? (
        <div className=" w-full h-full object-contain ">
          <ReactPlayer
            // className="reactPlayer"
            width="100%"
            height="100%"
            playing={true}
            volume={0.9}
            url={`https://www.youtube.com/watch?v=${playerObject?.trailer?.id}`}
          />
        </div>
      ) : (
        <picture>
          <source media="(min-width:768px)" srcSet={playerObject.cover} />
          <img
            className=" w-full h-full object-cover rounded-md"
            loading="lazy"
            src={`${playerObject?.trailer.thumbnail}`}
          />
        </picture>
      )}
      {!player && (
        <div className=" w-full h-full -top-[5rem] left-0 absolute text-white/90 flex flex-col justify-end pl-4 z-30 font-Roboto sm:justify-end sm:-top-[2rem] xl:-top-[5rem] xl:px-[5rem]">
          <h1 className=" text-4xl font-semibold">
            {playerObject.title.english}
          </h1>
          <p className=" text-sm lg:text-base lg:font-bold">
            Status: Completed
          </p>
          <div className=" flex gap-3 font-Roboto text-xs font-medium">
            <h1>Rating: 89</h1>
            <p>Release Date: 2021</p>
            <p>Total Episdes: 148</p>
          </div>
          <div className=" flex gap-4 ">
            <button className=" text-black bg-blue-50 mt-5 text-sm rounded-lg py-3 px-4 font-bold">
              Learn More
            </button>
            <button className="  bg-[#292929] mt-5 text-sm rounded-lg py-3 px-4 font-bold text-white flex justify-center items-center gap-2">
              <FaRegBookmark /> To Watch
            </button>
          </div>
        </div>
      )}

      <div className=" w-full h-full absolute top-0 left-0 right-0 bg-gradient-to-t from-black/85 z-20" />
    </div>
  );
};

export default HeroPlayer;
