import CartList from "./CartList";
import { useState } from "react";
import { useGetPopularAnimeQuery } from "../components/Api/animeApiSlice";

const Cards = () => {
  const [page, setPage] = useState({
    pages: 2,
    perPage: 20,
  });
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetPopularAnimeQuery({ page });

  return (
    <div className=" bg-[#18181C] p-2 rounded-md m-1">
      <ul className=" w-full flex gap-2  overflow-auto rounded-md no-scrollbar  xl:h-[35rem] xl:flex-col xl:py-1 2xl:h-[43rem] ">
        {data?.results?.map((item) => (
          <CartList
            key={item.id}
            image={item.image}
            genres={item.genres}
            english={item.title.english}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cards;

// import CartList from "./CartList";

// const Cards = ({ data }) => {
//   return (
//     <div className=" absolute w-full left-0 right-0 -bottom-[15rem] px-3 sm:-bottom-[19rem] xl:px-[5rem] xl:-bottom-[18rem]">
//       <div className="h-[18rem] flex gap-3 overflow-auto no-scrollbar rounded-md scroll-smooth snap-x ">
//         {data?.results?.map((item) => {
//           return (
//             <CartList
//               key={item.id}
//               image={item.image}
//               genres={item.genres}
//               english={item.title.english}
//               item={item}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Cards;
