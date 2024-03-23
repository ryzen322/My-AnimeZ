import { useState } from "react";
import { useGetAnimeQuery } from "./Api/animeApiSlice";
import CarouselSlide from "./CarouselSlide";
import H1Headling from "./LoadingUI.jsx/H1Headling";
import { LoadingAnime } from "./LoadingUI.jsx/LoadingCard";

const Carousel = ({ genreAnime, title }) => {
  const [params, setParams] = useState({
    page: 1,
    perPage: 20,
    endpoints: genreAnime,
  });

  const { data, isLoading, isError, isFetching, isSuccess, isUninitialized } =
    useGetAnimeQuery(params);

  if (isLoading) {
    return <LoadingAnime length={20} />;
  }

  function addMore() {
    setParams((prev) => {
      return {
        ...prev,
        perPage: prev.perPage + 3,
      };
    });
  }

  return (
    <section className=" mb-[5rem] w-full h-auto relative ">
      <H1Headling>{title} Anime</H1Headling>

      <CarouselSlide
        data={data?.results}
        isLoading={isLoading}
        addMore={addMore}
      />
    </section>
  );
};

export default Carousel;
