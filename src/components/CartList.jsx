import { useDispatch } from "react-redux";
import { playingTrailer, playingYtTrailer } from "./Api/animeSlice";
import { FaPlay } from "react-icons/fa6";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const CartList = ({ english, genres, image, item }) => {
  const dispatch = useDispatch();

  function playerFunc() {
    dispatch(playingTrailer(item));
  }
  function displayInfo() {
    dispatch(playingYtTrailer(item));
  }

  return (
    <div className=" snap-center min-w-[210px] h-full  rounded-md cursor-pointer overflow-visible relative z-30 sm:min-w-[225px]">
      <div className=" font-Roboto text-stone-300 absolute w-full h-full top-0 left-0 right-0 flex flex-col justify-end z-30 p-3 text-sm font-bold sm:items-center">
        <h1 className=" sm:text-lg text-center">{english}</h1>
        <div className=" flex flex-wrap gap-x-2 text-white/50 font-medium sm:justify-center">
          {genres.map((item) => (
            <h1 key={item}>{item}</h1>
          ))}
        </div>
        <div className=" flex gap-2 mt-1">
          <button
            className=" bg-white text-black rounded-md text-sm flex justify-center items-center gap-2 active:ring ring-white px-3"
            onClick={playerFunc}
          >
            <FaPlay /> Play Trailer
          </button>
          <button
            className=" bg-white/35 rounded-md py-2 flex justify-center items-center gap-2 active:ring ring-white px-3 text-lg"
            onClick={displayInfo}
          >
            <AiOutlineExclamationCircle />
          </button>
        </div>
      </div>
      <img
        className=" w-full h-full object-fill rounded-md"
        src={`${image}`}
        alt=""
      />
      <div className=" w-full h-full absolute top-0 left-0 right-0 bg-gradient-to-t from-black/85 z-20"></div>
    </div>
  );
};

export default CartList;
