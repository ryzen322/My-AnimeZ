import H1Headling from "./LoadingUI.jsx/H1Headling";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Comment = () => {
  function handleForm(e) {
    e.preventDefault();
  }

  return (
    <div className=" my-5 px-2 font-Roboto w-full h-[25rem] ">
      <H1Headling>Discussion</H1Headling>

      <form
        onSubmit={handleForm}
        className=" w-full  rounded-md flex flex-col gap-3 my-2"
      >
        <div className=" flex w-full gap-3">
          <div className=" h-[2.5rem] w-[2.5rem]  rounded-full bg-white"></div>
          <input
            className=" flex-1 outline-none text-white px-3 font-semibold border-b text-sm bg-primaryColor"
            type="text"
            placeholder="Add a comment . . . "
          />
        </div>
        <div className=" flex flex-1 justify-end gap-2">
          <button
            type="button"
            className=" px-2 py-1 rounded-lg bg-stone-700 text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className=" px-2 py-1 rounded-lg bg-stone-700 text-sm"
          >
            Comment
          </button>
        </div>
      </form>

      <ul className=" flex flex-col gap-2">
        <li className=" flex gap-3">
          <div className=" h-[2.5rem] w-[2.5rem] bg-white rounded-full"></div>
          <div className=" flex flex-col gap-1 flex-1">
            <div className=" flex gap-1 text-sm">
              <p className=" font-bold">@arteezy626</p>
              <p className=" text-stone-400">1 month ago</p>
            </div>
            <p className=" text-sm">
              In a couple of years, every developer is going to have their own
              YouTube channel, and they're going to be talking about how to get
              a job.
            </p>
            <div className=" flex gap-2 text-xs">
              <p className=" text-stone-400 flex items-center gap-2">
                <AiOutlineLike size={"20px"} /> 294
              </p>
              <p className=" text-stone-400 flex items-center gap-2">
                <AiOutlineDislike size={"20px"} />
              </p>
              <p className=" py-2 px-3 rounded-md bg-gray-800 font-bold cursor-pointer">
                Reply
              </p>
            </div>
          </div>
        </li>
        <li className=" flex gap-3">
          <div className=" h-[2.5rem] w-[2.5rem] bg-white rounded-full"></div>
          <div className=" flex flex-col gap-1 flex-1">
            <div className=" flex gap-1 text-sm">
              <p className=" font-bold">@arteezy626</p>
              <p className=" text-stone-400">1 month ago</p>
            </div>
            <p className=" text-sm">
              In a couple of years, every developer is going to have their own
              YouTube channel, and they're going to be talking about how to get
              a job.
            </p>
            <div className=" flex gap-2 text-xs">
              <p className=" text-stone-400 flex items-center gap-2">
                <AiOutlineLike size={"20px"} /> 294
              </p>
              <p className=" text-stone-400 flex items-center gap-2">
                <AiOutlineDislike size={"20px"} />
              </p>
              <p className=" py-2 px-3 rounded-md bg-gray-800 font-bold cursor-pointer">
                Reply
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Comment;
