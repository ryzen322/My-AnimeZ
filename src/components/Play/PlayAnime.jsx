import { usePlayAnimeQuery } from "../Api/animeApiSlice";
import { useEffect, useRef } from "react";
import VPlayer from "vnetwork-player";
import Hls from "hls.js";
import "vnetwork-player/dist/vnetwork-player.min.css"; // import css

const PlayAnime = ({ isPlaying }) => {
  const playerRef = useRef(null);

  const { data, isLoading } = usePlayAnimeQuery({ id: isPlaying });

  if (isLoading) {
    return <>Loiadng....</>;
  }

  return (
    <>
      <div id="demo-vnetwork-player">
        <div className=" md:w-[600px]  lg:w-[1200px] aspect-video mt-5">
          {isLoading ? (
            "loading"
          ) : (
            <VPlayer
              source={data?.sources?.map((item) => {
                return {
                  ...item,
                  label: item.quality,
                };
              })}
              color="#ff0000"
              autoPlay
              subtitle={[
                {
                  lang: "Fr",
                  url: "/fr.vtt",
                },
                {
                  lang: "En",
                  url: "/en.vtt",
                },
              ]}
              playerRef={playerRef}
              Hls={Hls}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PlayAnime;
