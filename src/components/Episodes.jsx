const Episodes = ({
  filteredEpisodes = [],
  nextPages,
  episodesArray = [],
  currentEpisode,
  selectEpisode,
}) => {
  function nextEpisode(ep) {
    selectEpisode(ep);
  }

  const currentPage = filteredEpisodes[0].pagePrev;

  return (
    <div className=" flex flex-col bg-gray-800 rounded  px-3 py-2 gap-2 lg:absolute lg:w-[40%]  lg:top-[5rem] lg:-right-[50rem] group-hover:right-[0.5rem] duration-300 ease-in 2xl:top-[2rem]">
      <div className="  w-full  flex scroll-smooth overflow-x-scroll snap-proximity snap-x rounded gap-2">
        {episodesArray.map((item) => (
          <div
            key={item.id}
            className={` ${
              item.pagePrev === currentPage ? " bg-stone-500" : " bg-black/80"
            } h-[2.5rem] min-w-[7rem] snap-start rounded-sm text-xs font-bold flex justify-center items-center cursor-pointer sm:min-w-[10rem] xl:min-[4rem]:`}
            onClick={() => nextPages(item.pagePrev)}
          >
            <p className=" sm:text-sm">
              {" "}
              Page: {item.pagePrev === 0 ? 1 : item.pagePrev + 1} -{" "}
              {item.pageNext}
            </p>
          </div>
        ))}
      </div>
      <div className=" flex flex-wrap gap-1 justify-center lg:gap-2">
        {filteredEpisodes[0]?.item?.map((item) => (
          <button
            key={item.id}
            className={`${
              currentEpisode === item.id ? " bg-slate-400" : "bg-black/60"
            } text-stone-200 shadow-md rounded-sm mt-1 w-[3.7rem] text-sm py-1 font-bold flex justify-center items-center 2xl:text-lg 2xl:w-[5rem] `}
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
