import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import Cards from "../Cards";
import BackgroundUi from "../LoadingUI.jsx/BackgroundUi";

const Trailer = () => {
  const { playerObject, player } = useSelector((state) => state.anime);

  return (
    <div className=" flex flex-col rounded-md overflow-hidden font-Roboto p-1 gap-2 xl:flex-row">
      <div className="">
        {player ? (
          <div className=" aspect-video xl:h-[35rem] 2xl:h-[43rem]">
            <ReactPlayer
              width="100%"
              height="100%"
              playing={true}
              volume={0.9}
              url={`https://www.youtube.com/watch?v=${playerObject?.trailer?.id}`}
            />
          </div>
        ) : (
          <div className=" aspect-video relative bg-stone-500 rounded-md flex flex-col justify-center gap-1 md:bg-slate-500 md:justify-end md:py-2 lg:bg-stone-800 xl:h-[35rem] 2xl:h-[43rem]">
            <picture>
              <img
                className=" w-full h-full object-cover rounded-md "
                loading="lazy"
                src={`${playerObject?.trailer.thumbnail}`}
              />
            </picture>
            {/* <div className=" h-[2rem] w-[15rem] bg-green-400 rounded-md md:h-[3rem] md:w-[25rem]" />
            <div className=" h-[2rem] w-[10rem] bg-green-400 rounded-md md:h-[3rem] md:w-[15rem]" />
            <div className=" h-[2rem] w-[5rem] bg-green-400 rounded-md md:h-[3rem] md:w-[10rem]" /> */}
            <BackgroundUi />
          </div>
        )}
      </div>
      <Cards />
    </div>
  );
};

export default Trailer;
