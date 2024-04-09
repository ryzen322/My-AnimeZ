import Collections from "../components/Collections";
import Carousel from "../components/Carousel";
import AllAnime from "../components/AllAnime";
import Footer from "../components/Footer";
import Trailer from "../components/trailer/Trailer";

const HomePage = () => {
  return (
    <div className=" w-full h-auto xl:container xl:mx-auto">
      <section className=" flex flex-col relative">
        <Trailer />
      </section>

      <Collections />

      {/* cards */}
      <Carousel genreAnime={"trending"} title={"Trending"} />
      <Carousel genreAnime={"popular"} title={"Popular"} />
      {/* cards */}

      <AllAnime />

      <Footer />
    </div>
  );
};

export default HomePage;
