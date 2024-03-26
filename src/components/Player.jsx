import { useParams } from "react-router-dom";
import PlayAnime from "./Play/PlayAnime";
import { useGetInfoAnimeQuery } from "./Api/animeApiSlice";
import { useMemo, useState } from "react";
import BackgroundUi from "./LoadingUI.jsx/BackgroundUi";
import { useDispatch, useSelector } from "react-redux";
import { playEpisodes } from "./Api/animeSlice";
import Comment from "./Comment";
import Recommendations from "./Recommendations";
import Carousel from "./Carousel";
import Footer from "./Footer";

const Player = () => {
  const id = useParams();
  const { playEpisodes: playEp } = useSelector((state) => state.anime);

  const [pages, setPages] = useState(0);
  const dispatch = useDispatch();
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
  const textData = data?.description;

  return (
    <section className=" p-1 font-Robot overflow-hidden relative ">
      <div className=" flex flex-col gap-1 group lg:flex-row">
        {playEp && (
          <PlayAnime
            filteredEpisodes={filter}
            nextPages={nextPages}
            episodesArray={episodesArray}
          />
        )}
        {!playEp && (
          <div className="  aspect-video cursor-pointer w-full rounded overflow-hidden relative xl:h-[35rem]">
            <picture>
              <source media="(min-width:768px)" srcSet={data?.cover} />
              <img
                className=" w-full h-full object-cover rounded-md absolute top-0 left-0 right-0 bottom-0"
                src={`${data?.trailer?.thumbnail || data?.image}`}
              />
            </picture>
            <div className=" relative z-30 w-full h-full flex flex-col justify-end p-[1rem] sm:max-w-[25rem] md:max-w-[30rem] xl:justify-center xl:max-w-[40rem]">
              <h1 className=" text-[#FBFBFB] font-semibold text-2xl my-2 sm:text-3xl md:text-4xl">
                {data?.title?.english}
              </h1>
              <p
                className=" text-base hidden text-stone-300 lg:block lg:text-lg font-medium"
                dangerouslySetInnerHTML={{ __html: textData }}
              />
              <p className=" text-stone-400 text-xs font-medium sm:text-sm lg:text-stone-300 xl:text-lg">
                Duration: 29
              </p>
              <p className=" text-stone-400 text-xs font-medium sm:text-sm lg:text-stone-300 xl:text-lg">
                Episodes Total: 299
              </p>
              <p className=" text-stone-400 text-xs font-medium sm:text-sm lg:text-stone-300 xl:text-lg">
                Rating: 29
              </p>
              <p className=" text-stone-400 text-xs font-medium my-4 sm:text-sm lg:text-stone-300 xl:text-lg">
                Series - Action - 2022
              </p>

              <div
                className=" py-2 px-4 bg-white text-black flex justify-center items-center rounded-lg text-sm font-semibold hover:bg-white/70 sm:text-base xl:w-[7.5rem] xl:text-lg"
                onClick={() => dispatch(playEpisodes(data?.episodes[0]?.id))}
              >
                Play Now
              </div>
            </div>
            <BackgroundUi />
          </div>
        )}
      </div>
      <div className=" flex flex-col gap-3 my-6 lg:flex-row">
        <Comment />
        <Recommendations recommend={data?.recommendations} />
      </div>

      <Carousel genreAnime={"trending"} title={"Trending"} />
      <Carousel genreAnime={"popular"} title={"Popular"} />

      <Footer />
    </section>
  );
};

export default Player;
