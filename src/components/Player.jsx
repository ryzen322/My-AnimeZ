import { useParams } from "react-router-dom";
import PlayAnime from "./Play/PlayAnime";
import { useGetInfoAnimeQuery } from "./Api/animeApiSlice";
import { useMemo, useState } from "react";

const Player = () => {
  const id = useParams();
  const [isPlaying, setIsPlaying] = useState(null);
  const [pages, setPages] = useState(0);
  const { data, isLoading } = useGetInfoAnimeQuery(id);
  const animeNext =
    data?.episodes.length < 30 ? 1 : data?.episodes.length / 30 + 1;

  const array = Array.from({ length: animeNext }, (_, index) => {
    return {
      id: index + 1,
      pagePrev: index + 1 === 1 ? 0 : (index + 1) * 30 - 30,
      pageNext: (index + 1) * 30,
    };
  });

  const episodesArray = [];

  for (const arr of array) {
    const episode = {
      item: data.episodes.slice(arr.pagePrev, arr.pageNext),
      id: arr.id,
      pagePrev: arr.pagePrev,
      pageNext: data.episodes.length < 29 ? data.episodes.length : arr.pageNext,
    };

    episodesArray.push(episode);
  }

  const filter = useMemo(
    () => episodesArray.filter((item) => item.pagePrev === pages),
    [episodesArray, pages]
  );

  function nextPages(pageNumber) {
    setPages(pageNumber);
  }

  function playedAnime(item) {
    setIsPlaying(item);
  }

  return (
    <section className=" p-1 font-Robot overflow-hidden ">
      <div className=" flex flex-col gap-1 2xl:flex-row">
        {isPlaying && <PlayAnime isPlaying={isPlaying} />}
        {!isPlaying && (
          <div className=" 2xl:w-[1200px] aspect-video bg-slate-600 cursor-pointer rounded"></div>
        )}
        <div className=" flex flex-col bg-stone-600 rounded px-3 py-2 gap-1 sm:bg-slate-500 md:bg-stone-500 2xl:w-[25%]">
          <div className="  w-full  flex scroll-smooth overflow-scroll no-scrollbar snap-proximity snap-x rounded gap-1">
            {episodesArray.map((item) => (
              <div
                key={item.id}
                className=" bg-black/80 h-[2rem] min-w-[7rem] rounded-md text-xs font-bold flex justify-center items-center cursor-pointer sm:min-w-[9rem]"
                onClick={() => nextPages(item.pagePrev)}
              >
                <p className=" sm:text-sm">
                  Episodes {item.pagePrev === 0 ? 1 : item.pagePrev + 1} -{" "}
                  {item.pageNext}
                </p>
              </div>
            ))}
          </div>
          <div className=" flex flex-wrap gap-1 justify-center">
            {filter[0]?.item?.map((item) => (
              <button
                key={item.id}
                className=" bg-white text-black rounded mt-1 w-[3rem] text-sm py-1 font-bold flex justify-center items-center 2xl:text-lg 2xl:w-[5rem] "
                onClick={() => playedAnime(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Player;
