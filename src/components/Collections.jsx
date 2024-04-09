import { useGetTrendingAnimeQuery } from "./Api/animeApiSlice";
import CartCollections from "./CartCollections";
import H1Headling from "./LoadingUI.jsx/H1Headling";

const Collections = () => {
  const params = { page: 1, perPage: 12 };

  const { data, isLoading, isError, isFetching, isSuccess, isUninitialized } =
    useGetTrendingAnimeQuery(params);
  const collected = [
    {
      id: 1,
      title: "The Best",
      category: "Mystical Anime",
      images: data?.results.slice(0, 3),
    },
    {
      id: 2,
      title: "Top 20",
      category: "Romance Anime",
      images: data?.results.slice(3, 6),
    },
    {
      id: 3,
      title: "Most Awarded",
      category: "Of All Time",
      images: data?.results.slice(6, 9),
    },
    {
      id: 4,
      title: "The Most Dramatic",
      category: "Anime",
      images: data?.results.slice(9, 12),
    },
  ];

  return (
    <div className="mt-[5rem] mb-[5rem] sm:mt-[23rem]">
      <H1Headling>Prefered Collections</H1Headling>

      <section className=" w-full px-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-2 2xl:gap-4">
        {collected.map((item) => (
          <CartCollections
            key={item.id}
            isLoading={isLoading}
            category={item.category}
            title={item.title}
            list={item.images}
          />
        ))}
      </section>
    </div>
  );
};

export default Collections;
