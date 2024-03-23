import BackgroundUi from "./BackgroundUi";

const LoadingHeading = ({ children }) => {
  return (
    <>
      <div className=" w-full h-[18.5rem] relative rounded-md overflow-hidden bg-stone-600 animate-pulse">
        {children}
        <BackgroundUi />
      </div>

      <div className="flex p-2 gap-1 md:gap-6 lg:gap-9">
        <div className=" w-[13rem] h-[20rem] relative rounded-md md:w-[16rem] md:h-[23rem] overflow-hidden lg:w-[17.5rem] lg:h-[24rem] lg:-top-[8.5rem] lg:z-30 shadow-2xl lg:ml-[2.5rem] xl:ml-[5rem] bg-stone-600 animate-pulse">
          <BackgroundUi />
        </div>
        <div
          className=" flex flex-col flex-1 gap-3
         px-3 py-2 lg:gap-5 lg:mt-5 lg:pr-[4rem]"
        >
          <h1 className=" bg-stone-600 animate-pulse h-[2rem] w-[12rem] rounded-md"></h1>
          <p className=" bg-stone-600 animate-pulse h-[2rem] w-[3rem] rounded-md"></p>

          <div className=" flex flex-wrap gap-2 ">
            <span className=" bg-stone-600 animate-pulse h-[2.7rem] w-[6rem] rounded-md"></span>
            <span className=" bg-stone-600 animate-pulse h-[2.7rem] w-[6rem] rounded-md"></span>
            <span className=" bg-stone-600 animate-pulse h-[2.7rem] w-[6rem] rounded-md"></span>
            <span className=" bg-stone-600 animate-pulse h-[2.7rem] w-[6rem] rounded-md"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export const LoadingInfo = () => {
  return (
    <div className=" mt-7 flex flex-col gap-4">
      <div className=" h-[2.5rem] w-[7rem] bg-stone-600 animate-pulse rounded-md"></div>
      <div className="h-[10rem] w-full bg-stone-600 animate-pulse rounded-md"></div>
      <div className="h-[10rem] w-full bg-stone-600 animate-pulse rounded-md"></div>
    </div>
  );
};

export default LoadingHeading;
