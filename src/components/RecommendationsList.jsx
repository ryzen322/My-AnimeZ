import BackgroundUi from "./LoadingUI.jsx/BackgroundUi";

const RecommendationsList = ({
  rating,
  id,
  status,
  type,
  image,
  episodes,
  title,
}) => {
  return (
    <li className=" min-w-[374px] rounded-xl relative overflow-hidden  cursor-pointer font-Roboto h-[498px] bg-[#252525] flex items-center lg:min-h-[160px] lg:p-3 w-full">
      <div className=" w-full h-full rounded-md overflow-hidden relative lg:w-[125px] ">
        <img
          className=" w-full h-full object-cover"
          loading="lazy"
          src={image}
          alt=""
        />
        <BackgroundUi />
      </div>

      <div className=" absolute w-full h-full flex flex-col justify-end top-0 left-0 right-0 z-30 px-3 py-3 text-stone-300 gap-2 lg:relative lg:justify-start">
        <h1 className=" text-xl font-bold leading-5">{title}</h1>
        <div className=" flex flex-col flex-wrap lg:flex-row lg:gap-2 ">
          <p className=" text-sm font-medium lg:text-xs">
            Episodes: {episodes}
          </p>
          <p className=" text-sm font-medium lg:text-xs">Status: {status}</p>
          <p className=" text-sm font-medium lg:text-xs">Rating: {rating}</p>
          <p className=" text-sm font-medium lg:text-xs">Type: {type}</p>
        </div>
      </div>
    </li>
  );
};

export default RecommendationsList;
