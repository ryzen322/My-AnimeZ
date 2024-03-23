import BackgroundUi from "./LoadingUI.jsx/BackgroundUi";
import { LoadingInfo } from "./LoadingUI.jsx/LoadingHeading";

const Character = ({ loading, data }) => {
  if (loading) {
    return <LoadingInfo />;
  }

  return (
    <div className=" mt-7">
      <article>
        <h1 className=" font-bold text-[20px] mb-5">Character</h1>

        <ul className=" flex gap-3 overflow-x-auto no-scrollbar">
          {data.characters.map((item) => (
            <li
              key={item.id}
              className=" min-w-[13rem] h-[17rem] bg-slate-600 rounded-lg overflow-hidden relative"
            >
              <img
                className=" w-full h-full object-cover rounded-lg relative z-10 top-0 left-0 right-0 bottom-0"
                src={item.image}
                alt=""
              />
              <div className=" absolute z-30 h-full w-full top-0 left-0 right-0 bottom-0 p-1 flex flex-col justify-end">
                <h1 className=" text-stone-300 text-lg">
                  {item.name.userPreferred}
                </h1>
                <button className=" bg-black/75 text-white rounded-md py-2 text-sm font-medium">
                  View Actors
                </button>
              </div>
              <BackgroundUi />
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};
export default Character;
