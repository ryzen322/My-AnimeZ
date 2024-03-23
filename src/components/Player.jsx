import { useParams } from "react-router-dom";
import PlayAnime from "./Play/PlayAnime";
import { useGetInfoAnimeQuery } from "./Api/animeApiSlice";
import { useState } from "react";

const Player = () => {
  const id = useParams();
  const [isPlaying, setIsPlaying] = useState(null);
  const { data, isLoading } = useGetInfoAnimeQuery(id);
  const animeNext =
    data?.episodes.length < 30 ? 1 : data?.episodes.length / 30 + 1;

  const array = Array.from({ length: animeNext }, (_, index) => {
    return {
      id: index + 1,
      pagePrev: index + 1 === 1 ? 0 : (index + 1) * 30 - 29,
      pageNext: (index + 1) * 30 + 1,
    };
  });

  const episodesArray = [];

  for (const arr of array) {
    const episode = {
      item: data.episodes.slice(arr.pagePrev, arr.pageNext),
    };

    episodesArray.push(episode);
  }

  console.log(episodesArray);

  return (
    <section>
      <div className=" flex flex-col gap-1">
        {isPlaying && <PlayAnime isPlaying={isPlaying} />}
        {!isPlaying && (
          <div
            className=" md:w-[600px]  lg:w-[1200px] aspect-video bg-slate-600 cursor-pointer rounded"
            onClick={() => setIsPlaying(data?.episodes[0]?.url)}
          ></div>
        )}
        <div className=" bg-stone-600 w-full h-[7.8rem] p-1"></div>
      </div>
    </section>
  );
};

export default Player;
