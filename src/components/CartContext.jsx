import { MdOutlineAccessTimeFilled } from "react-icons/md";
import BackgroundUi from "./LoadingUI.jsx/BackgroundUi";
import { Link } from "react-router-dom";

const CartContext = ({ item }) => {
  return (
    <>
      <img
        className=" absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full "
        src={item.image}
        alt=""
      />
      <div className=" relative flex flex-col h-full font-Roboto px-2 z-30">
        <div className=" w-full p-1">
          <MdOutlineAccessTimeFilled className=" ml-auto" size={"30px"} />
        </div>
        <div className=" pb-3 flex-1 flex flex-col justify-end h-full text-white text-sm font-bold leading-4">
          <h1>{item.title.english}</h1>
          <div
            className={` flex flex-col gap-x-2 flex-wrap text-xs font-bold text-[#cccc]`}
          >
            <span>Rating: {item.rating}</span>
            <span>Release Date: {item.releaseDate}</span>
            <span>Total Episodes: {item.totalEpisodes}</span>
          </div>
          <div className=" flex gap-x-2 flex-wrap text-xs font-bold text-stone-500">
            {item.genres.map((genre) => (
              <p
                className=" border-b border-b-transparent hover:border-b-blue-500 hover:text-white"
                key={genre}
              >
                {genre}
              </p>
            ))}
          </div>
          <div className=" flex gap-1 items-center mt-1">
            <Link
              to={`/watch/${item.id}`}
              className=" bg-white text-black py-2 px-3 rounded-md text-xs font-bold w-full hover:bg-white/75 border flex justify-center items-center"
            >
              Watch
            </Link>
          </div>
        </div>
      </div>
      <BackgroundUi />
    </>
  );
};

export default CartContext;
