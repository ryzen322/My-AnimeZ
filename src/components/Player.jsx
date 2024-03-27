import { useParams } from "react-router-dom";
import PlayAnime from "./Play/PlayAnime";
import { useGetInfoAnimeQuery } from "./Api/animeApiSlice";
import Comment from "./Comment";
import Recommendations from "./Recommendations";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { useEpisode } from "./ultils";

const Player = () => {
  const id = useParams();

  const { data, isLoading } = useGetInfoAnimeQuery(id);

  const { pages, nextPages, filter, episodesArray } = useEpisode(data);

  return (
    <section className=" p-1 font-Robot overflow-hidden relative ">
      <div className=" flex flex-col gap-1 group ">
        <PlayAnime
          filteredEpisodes={filter}
          nextPages={nextPages}
          episodesArray={episodesArray}
        />
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
