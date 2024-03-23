import ReactPlayer from "react-player";
import { usePlayAnimeQuery } from "../Api/animeApiSlice";

const PlayAnime = ({ isPlaying }) => {
  const { data, isLoading } = usePlayAnimeQuery({ id: isPlaying });

  console.log(data);

  let content;

  if (isLoading) {
    content = <>Loiadng....</>;
  } else {
    content = (
      <div className="player-wrapper">
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
      <div className=" md:w-[600px]  lg:w-[1200px] aspect-video ">
        {content}
      </div>
    </>
  );
};

export default PlayAnime;
