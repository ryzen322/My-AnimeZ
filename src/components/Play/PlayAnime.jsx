import ReactPlayer from "react-player";
import { usePlayAnimeQuery } from "../Api/animeApiSlice";
import { useDispatch, useSelector } from "react-redux";
import Episodes from "../Episodes";
import { playEp, playEpisodes } from "../Api/animeSlice";
import { useEffect, useState } from "react";

const PlayAnime = ({
  filteredEpisodes = [],
  nextPages,
  episodesArray = [],
}) => {
  const playEpisode = useSelector(playEp);
  const [nextEpisode, setNextEpisode] = useState(playEpisode);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(null);
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isFetching } = usePlayAnimeQuery({
    id: nextEpisode,
  });

  useEffect(() => {
    if (duration === progress) {
      // naruto-episode-1 sample
      const episodeName = nextEpisode.slice(0, nextEpisode.length - 1); // naruto-episode-
      const episodeNum = Number(nextEpisode.slice(nextEpisode.length - 1)) + 1; // Episode Number 1
      setNextEpisode(`${episodeName}${episodeNum}`);
      setDuration(0);
      setProgress(null);
    }

    return () => {};
  }, [duration, progress, playEpisode, nextEpisode, dispatch]);

  function selectEpisode(selectedEpisode) {
    setNextEpisode(selectedEpisode);
  }

  let content;

  if (isFetching) {
    content = <>Loiadng....</>;
  } else {
    content = (
      <div className=" w-full h-full">
        <ReactPlayer
          url={`${data?.sources[4]?.url}`}
          controls={true}
          playing={true}
          onDuration={(e) => setDuration(Math.floor(e))}
          onProgress={(e) => setProgress(Math.floor(e.playedSeconds))}
          width="100%"
          height="100%"
        />
      </div>
    );
  }

  return (
    <>
      <div className="  aspect-video cursor-pointer rounded overflow-hidden relative  xl:h-[35rem] xl:w-full">
        {content}
      </div>
      <Episodes
        filteredEpisodes={filteredEpisodes}
        nextPages={nextPages}
        episodesArray={episodesArray}
        currentEpisode={nextEpisode}
        selectEpisode={selectEpisode}
      />
    </>
  );
};

export default PlayAnime;
