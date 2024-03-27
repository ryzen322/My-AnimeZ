import BackgroundUi from "./LoadingUI.jsx/BackgroundUi";
import H1Headling from "./LoadingUI.jsx/H1Headling";
import { LoadingAnime } from "./LoadingUI.jsx/LoadingCard";

const Recomendation = ({ data, loading }) => {
  if (loading) {
    return <LoadingAnime length={8} />;
  }

  return (
    <div className=" my-9">
      <H1Headling>Recommendation</H1Headling>

      <ul className=" flex gap-3 overflow-x-auto no-scrollbar px-3">
        {data.recommendations.map((item) => (
          <li
            key={item.id}
            className=" min-w-[13rem] h-[17rem] bg-slate-600 rounded-lg overflow-hidden relative"
          >
            <img
              className=" w-full h-full object-cover rounded-lg relative z-10 top-0 left-0 right-0 bottom-0"
              loading="lazy"
              src={item.image}
              alt=""
            />
            <div className=" absolute z-30 h-full w-full top-0 left-0 right-0 bottom-0 p-1 flex flex-col justify-end py-3 gap-2">
              <h1 className=" text-stone-300 text-md font-medium text-lg text-center">
                {item.title.userPreferred}
              </h1>
              <button className=" text-md font-bold text-stone-600 bg-white hover:bg-white/75 py-2 rounded-md w-full">
                Play
              </button>
            </div>
            <BackgroundUi />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recomendation;
