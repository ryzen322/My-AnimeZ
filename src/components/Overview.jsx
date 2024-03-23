import { LoadingInfo } from "./LoadingUI.jsx/LoadingHeading";

const Overview = ({ loading, data = {} }) => {
  if (loading) {
    return <LoadingInfo />;
  }

  const dateFunction = (date) => {
    const { year, month, day } = date;

    return `${month} ${day} ${year}`;
  };
  const textData = data?.description;

  return (
    <div className=" mt-7 flex flex-col-reverse gap-5 lg:flex-row lg:gap-[6.5rem]">
      <article className=" flex-col">
        <h1 className=" font-bold text-[20px] mb-5">Details</h1>
        <ul className=" grid grid-cols-1 gap-3">
          <li className=" flex gap-4 text-md">
            <p className=" text-stone-400 min-w-[105px]">Type</p>
            <p>{data.tv} Show</p>
          </li>
          <li className=" flex gap-4 text-md">
            <p className=" text-stone-400 min-w-[105px]">Restrict</p>
            <p>{data.isAdult === true ? "r18+" : "rated 16+"}</p>
          </li>
          <li className=" flex gap-4 text-md">
            <p className=" text-stone-400 min-w-[105px]">Episodes</p>
            <p>20</p>
          </li>
          <li className=" flex gap-4 text-md">
            <p className=" text-stone-400 min-w-[105px]">Genres</p>
            <p>Adventure, Drama, Supernatural</p>
          </li>
          <li className=" flex gap-4 text-md">
            <p className=" text-stone-400 min-w-[105px]">Aired</p>
            <p>
              {dateFunction(data.startDate)}, to {dateFunction(data.endDate)}
            </p>
          </li>
          <li className=" flex gap-4 text-md">
            <p className=" text-stone-400 min-w-[105px]">Status</p>
            <p>{data.season}</p>
          </li>
          <li className=" flex gap-4 text-md">
            <p className=" text-stone-400 min-w-[105px]">Season</p>
            <p>{data.season}</p>
          </li>
          <li className=" flex gap-4 text-md">
            <p className=" text-stone-400 min-w-[105px]">Rating</p>
            <p>{data.duration}</p>
          </li>
          <li className=" flex gap-4 text-md">
            <p className=" text-stone-400 min-w-[105px]">Duration</p>
            <p>{data.duration}</p>
          </li>
          <li className=" flex gap-4 text-md">
            <p className=" text-stone-400 min-w-[105px]">Total Episodes</p>
            <p>{data.totalEpisodes}</p>
          </li>
        </ul>
      </article>
      <article className=" flex-col lg:flex-1">
        <h1 className=" font-bold text-[20px] mb-5">Description</h1>
        <p
          className=" text-base text-stone-300 lg:text-lg"
          dangerouslySetInnerHTML={{ __html: textData }}
        />
      </article>
    </div>
  );
};

export default Overview;
