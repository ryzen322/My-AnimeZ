import { useParams } from "react-router-dom";
import { useGetInfoAnimeQuery } from "../Api/animeApiSlice";
import WatchHeading from "./WatchHeading";
import WatchArcticle from "./WatchArcticle";
import Recomendation from "../Recomendation";
import Footer from "../Footer";

const WatchInfo = () => {
  const id = useParams();
  const { data, isLoading } = useGetInfoAnimeQuery(id);

  console.log(data);

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
