import { useState } from "react";
import { useGetAnimeQuery } from "./Api/animeApiSlice";
import H1Headling from "./LoadingUI.jsx/H1Headling";
import { LoadingAnime } from "./LoadingUI.jsx/LoadingCard";

import CartContext from "./CartContext";

const AllAnime = () => {
  const [params, setParams] = useState({
    page: 1,
    perPage: 9,
    endpoints: "popular",
  });

  const { data, isLoading, isError, isFetching, isSuccess, isUninitialized } =
    useGetAnimeQuery(params);

  function showMore() {
    setParams((prev) => {
      return {
        ...prev,
        perPage: prev.perPage + 3,
      };
    });
  }

  let context;

  if (isLoading) {
    context = <LoadingAnime length={9} />;
  } else {
    context = (
      <div className=" flex gap-2 justify-center flex-wrap sm:gap-1 scroll-smooth h-auto">
        {data?.results?.map((item) => (
          <div
            key={item.id}
            className=" relative h-[16.5rem] rounded-md max-w-[155px] xl:min-w-[163px] overflow-hidden group cursor-pointer"
          >
            <CartContext item={item} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className=" h-auto w-full mb-3 flex flex-col items-center overflow-hidden">
      <H1Headling>Most viewed Anime</H1Headling>
      {context}
      <button
        className=" w-[95%] py-2 bg-white text-black font-bold hover:bg-white/80 rounded-md mt-3"
        onClick={showMore}
      >
        Show More
      </button>
    </section>
  );
};

export default AllAnime;
