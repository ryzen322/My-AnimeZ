import ReactPlayer from "react-player";
import { usePlayAnimeQuery } from "../Api/animeApiSlice";
import { useSelector } from "react-redux";
import Episodes from "../Episodes";

const PlayAnime = ({
  filteredEpisodes = [],
  nextPages,
  episodesArray = [],
}) => {
  const { anime } = useSelector((state) => state);
  const { data, isLoading } = usePlayAnimeQuery({ id: anime.playEpisodes });

  let content;

  if (isLoading) {
    content = <>Loiadng....</>;
  } else {
    content = (
      <div className=" w-full h-full">
        <ReactPlayer
          url={`${data?.sources[4]?.url}`}
          controls={true}
          playing={true}
          // onDuration={(e) => console.log(Math.floor(e))}
          // onProgress={(e) => console.log(Math.floor(e.playedSeconds))}
          width="100%"
          height="100%"
        />
      </div>
    );
  }

  return (
    <>
      <div className="  aspect-video cursor-pointer w-full rounded overflow-hidden relative  xl:h-[35rem]">
        {content}
      </div>
      <Episodes
        filteredEpisodes={filteredEpisodes}
        nextPages={nextPages}
        episodesArray={episodesArray}
      />
    </>
  );
};

export default PlayAnime;
