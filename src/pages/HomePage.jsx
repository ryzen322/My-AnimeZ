import { useState } from "react";
import { useGetPopularAnimeQuery } from "../components/Api/animeApiSlice";
import HeroPlayer from "../components/HeroPlayer";

import Cards from "../components/Cards";
import Collections from "../components/Collections";
import Carousel from "../components/Carousel";
import AllAnime from "../components/AllAnime";
import Footer from "../components/Footer";
import Trailer from "../components/trailer/Trailer";

const HomePage = () => {
  const [page, setPage] = useState({
    pages: 2,
    perPage: 20,
  });
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetPopularAnimeQuery({ page });

  return (
    <div className=" w-full h-auto xl:container xl:mx-auto">
      <section className=" flex flex-col relative">
        {/* <HeroPlayer />
        <Cards data={data} /> */}
        <Trailer data={data} />
      </section>

      <Collections />

      {/* cards */}
      <Carousel genreAnime={"trending"} title={"Trending"} />
      <Carousel genreAnime={"popular"} title={"Popular"} />
      {/* cards */}

      <AllAnime />

      <Footer />
    </div>
  );
};

export default HomePage;
