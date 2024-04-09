import { useDispatch } from "react-redux";
import {
  playingTrailer,
  playingYtTrailer,
  addFavorites,
} from "./Api/animeSlice";
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
  function addFavorite() {
    dispatch(addFavorites(item));
  }

  return (
    <li className=" h-[16rem] min-w-[180px] overflow-hidden rounded-md flex items-center gap-2 relative cursor-pointer xl:min-h-[9rem] xl:p-1 flex-wrap bg-stone-800">
      <div className=" w-full h-full rounded-md relative xl:w-[40%]">
        <img
          src={`${image}`}
          alt=""
          className=" w-full h-full object-fill rounded-md relative"
        />
        <div className=" absolute w-full h-full  top-0 left-0 right-0 flex flex-col justify-end z-30 p-1 xl:hidden">
          <h1 className=" text-white text-sm font-semibold">{english}</h1>
          <div className=" flex gap-x-1 text-stone-400 text-xs flex-wrap font-normal">
            {genres.map((item) => (
              <h1 key={item}>{item}</h1>
            ))}
          </div>
          <div className=" flex gap-2 my-1">
            <button
              className=" bg-white text-black rounded-md text-xs flex justify-center items-center gap-2 active:ring ring-white px-3 font-semibold"
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
            <button className=" text-white" onClick={addFavorite}>
              Likes
            </button>
          </div>
        </div>
      </div>
      <div className=" hidden xl:flex flex-col justify-center gap-2 text-sm w-[8.8rem] h-full white">
        <h1 className=" text-white text-xs font-semibold">{english}</h1>
        <div className=" flex gap-x-1 text-stone-400 text-xs flex-wrap font-normal">
          {genres?.map((item) => (
            <h1 key={item}>{item}</h1>
          ))}
        </div>
        <div className=" flex gap-2 my-1">
          <button
            className=" bg-white text-black rounded-md text-xs flex justify-center items-center gap-2 active:ring ring-white px-3 font-semibold"
            onClick={playerFunc}
          >
            <FaPlay />
            Trailer
          </button>
          <button
            className=" bg-white/35 rounded-md py-2 flex justify-center items-center gap-2 active:ring ring-white px-3 text-lg"
            onClick={displayInfo}
          >
            <AiOutlineExclamationCircle />
          </button>
        </div>
      </div>
      <div className=" w-full h-full absolute top-0 left-0 right-0 bg-gradient-to-t from-black/85 z-20 xl:hidden" />
    </li>
  );
};

export default CartList;

// const CartList = ({ english, genres, image, item }) => {
//   const dispatch = useDispatch();

//   function playerFunc() {
//     dispatch(playingTrailer(item));
//   }
//   function displayInfo() {
//     dispatch(playingYtTrailer(item));
//   }

//   return (
//     <div className=" snap-center min-w-[210px] h-full  rounded-md cursor-pointer overflow-visible relative z-30 sm:min-w-[225px]">
//       <div className=" font-Roboto text-stone-300 absolute w-full h-full top-0 left-0 right-0 flex flex-col justify-end z-30 p-3 text-sm font-bold sm:items-center">
//         <h1 className=" sm:text-lg text-center">{english}</h1>
//         <div className=" flex flex-wrap gap-x-2 text-white/50 font-medium sm:justify-center">
//           {genres.map((item) => (
//             <h1 key={item}>{item}</h1>
//           ))}
//         </div>
//         <div className=" flex gap-2 mt-1">
//           <button
//             className=" bg-white text-black rounded-md text-sm flex justify-center items-center gap-2 active:ring ring-white px-3"
//             onClick={playerFunc}
//           >
//             <FaPlay /> Play Trailer
//           </button>
//           <button
//             className=" bg-white/35 rounded-md py-2 flex justify-center items-center gap-2 active:ring ring-white px-3 text-lg"
//             onClick={displayInfo}
//           >
//             <AiOutlineExclamationCircle />
//           </button>
//         </div>
//       </div>
//       <img
//         className=" w-full h-full object-fill rounded-md"
//         src={`${image}`}
//         alt=""
//       />
//       <div className=" w-full h-full absolute top-0 left-0 right-0 bg-gradient-to-t from-black/85 z-20"></div>
//     </div>
//   );
// };

// export default CartList;
