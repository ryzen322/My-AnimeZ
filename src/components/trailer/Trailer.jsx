import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import Cards from "../Cards";
import BackgroundUi from "../LoadingUI.jsx/BackgroundUi";

const Trailer = () => {
  const { playerObject, player } = useSelector((state) => state.anime);

  return (
    <div className=" flex flex-col rounded-md overflow-hidden font-Roboto p-1 gap-2  xl:flex-row">
      <div className=" aspect-video overflow-hidden rounded-md xl:min-w-[70%] flex-grow">
        {player ? (
          <ReactPlayer
            width="100%"
            height="100%"
            playing={true}
            volume={0.9}
            url={`https://www.youtube.com/watch?v=${playerObject?.trailer?.id}`}
          />
        ) : (
          <div className=" h-full w-full relative rounded-md">
            <picture>
              <img
                className=" w-full h-full rounded-md object-cover"
                loading="lazy"
                src={`${playerObject?.trailer.thumbnail}`}
              />
              <BackgroundUi />
            </picture>
            {/* <div className=" h-[2rem] w-[15rem] bg-green-400 rounded-md md:h-[3rem] md:w-[25rem]" />
            <div className=" h-[2rem] w-[10rem] bg-green-400 rounded-md md:h-[3rem] md:w-[15rem]" />
            <div className=" h-[2rem] w-[5rem] bg-green-400 rounded-md md:h-[3rem] md:w-[10rem]" /> */}
          </div>
        )}
      </div>
      <Cards />
    </div>
  );
};

export default Trailer;
