import { useParams } from "react-router-dom";
import PlayAnime from "./Play/PlayAnime";
import { useGetInfoAnimeQuery } from "./Api/animeApiSlice";
import { useState } from "react";

const Player = () => {
  const id = useParams();

  const { data, isLoading } = useGetInfoAnimeQuery(id);

  const [isPlaying, setIsPlaying] = useState(data?.episodes[0]?.id);

  let context;

  if (isLoading) {
    context = <>Loading...</>;
  } else {
    context = <PlayAnime isPlaying={isPlaying} />;
  }

  return <div>{context}</div>;
};

export default Player;
