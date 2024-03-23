export const LoadingAnime = ({ length, className }) => {
  const array = Array.from({ length: 20 }, (_, index) => {
    return {
      id: index + 1,
    };
  });

  return (
    <div className=" flex gap-1 sm:gap-1 mb-6 px-3 overflow-hidden">
      {array.map((item) => (
        <div
          key={item.id}
          className=" animate-pulse bg-[#cccc] h-[16.5rem] rounded-md min-w-[155px] xl:min-w-[163px]"
        ></div>
      ))}
    </div>
  );
};

const LoadingCard = () => {
  return (
    <div className=" h-[17rem] w-[14.75rem] animate-pulse rounded-md bg-stone-600"></div>
  );
};

export default LoadingCard;
