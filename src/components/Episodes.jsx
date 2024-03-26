import { useDispatch } from "react-redux";
import { playEpisodes } from "./Api/animeSlice";

const Episodes = ({ filteredEpisodes = [], nextPages, episodesArray = [] }) => {
  const dispatch = useDispatch();

  function nextEpisode(ep) {
    dispatch(playEpisodes(ep));
  }

  return (
    <div className=" flex flex-col bg-gray-800 rounded px-3 py-2 gap-2 xl:absolute xl:w-[25%]  xl:top-[3.5rem] xl:-right-[50rem] group-hover:right-0 duration-300 ease-in-out">
      <div className="  w-full  flex scroll-smooth overflow-scroll no-scrollbar snap-proximity snap-x rounded gap-2">
        {episodesArray.map((item) => (
          <div
            key={item.id}
            className=" bg-black/80 h-[2.5rem] min-w-[8rem] rounded-sm text-xs font-bold flex justify-center items-center cursor-pointer sm:min-w-[10rem]"
            onClick={() => nextPages(item.pagePrev)}
          >
            <p className=" sm:text-sm">
              Episodes: {item.pagePrev === 0 ? 1 : item.pagePrev + 1} -{" "}
              {item.pageNext}
            </p>
          </div>
        ))}
      </div>
      <div className=" flex flex-wrap gap-2 justify-center">
        {filteredEpisodes[0]?.item?.map((item) => (
          <button
            key={item.id}
            className=" bg-slate-400 text-stone-200 shadow-md rounded-sm mt-1 w-[3.7rem] text-sm py-1 font-bold flex justify-center items-center 2xl:text-lg 2xl:w-[5rem] "
            onClick={() => nextEpisode(item.id)}
          >
            EP {item.number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
