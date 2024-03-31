import { Link, useParams } from "react-router-dom";
import { useGetInfoAnimeQuery } from "../Api/animeApiSlice";
import WatchHeading from "./WatchHeading";
import WatchArcticle from "./WatchArcticle";
import Recomendation from "../Recomendation";
import Footer from "../Footer";

const WatchInfo = () => {
  const id = useParams();
  const { data, isLoading, isError, error } = useGetInfoAnimeQuery(id);

  if (isError) {
    return (
      <div className=" bg-primaryColor h-screen w-full flex flex-col justify-center items-center">
        <h1 className=" text-white text-4xl">
          <Link to={"/"}>Back to Home Error</Link>
        </h1>
        <p>
          {error.status} {JSON.stringify(error.data)}
        </p>
      </div>
    );
  }

  return (
    <section className=" h-auto w-full  relative">
      <WatchHeading loading={isLoading} data={data} paramID={id} />
      <WatchArcticle loading={isLoading} data={data} />
      <Recomendation loading={isLoading} data={data} />
      <Footer />
    </section>
  );
};

export default WatchInfo;
