import CartList from "./CartList";

const Cards = ({ data }) => {
  return (
    <div className=" absolute w-full left-0 right-0 -bottom-[15rem] px-3 sm:-bottom-[19rem] xl:px-[5rem] xl:-bottom-[18rem]">
      <div className="h-[18rem] flex gap-3 overflow-auto no-scrollbar rounded-md scroll-smooth snap-x ">
        {data?.results?.map((item) => {
          return (
            <CartList
              key={item.id}
              image={item.image}
              genres={item.genres}
              english={item.title.english}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
