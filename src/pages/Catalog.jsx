import { useState } from "react";
import ReactPlayer from "react-player/youtube";

const Catalog = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className=" w-[250px] h-[15rem] aspect-video">
        <ReactPlayer
          className="reactPlayer"
          width="100%"
          height="100%"
          playing={true}
          volume={0.9}
          url={click ? `https://www.youtube.com/watch?v=d6kBeJjTGnY` : null}
        />
      </div>

      <button className=" text-white" onClick={() => setClick((prev) => !prev)}>
        Click
      </button>
    </>
  );
};

export default Catalog;
