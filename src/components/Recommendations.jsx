import H1Headling from "./LoadingUI.jsx/H1Headling";
import RecommendationsList from "./RecommendationsList";

const Recommendations = ({ recommend = [] }) => {
  return (
    <div className=" w-full lg:w-[80%] ">
      <H1Headling>Recommendations</H1Headling>
      <ul className=" w-full flex items-center gap-4 overflow-y-auto no-scrollbar px-2 my-4 font-Roboto lg:flex-col lg:gap-2 lg:max-h-[20rem] ">
        {recommend.map((item) => (
          <RecommendationsList
            key={item.id}
            id={item.id}
            rating={item.rating}
            status={item.status}
            episodes={item.episodes}
            type={item.type}
            image={item.image}
            cover={item.cover}
            title={item?.title?.english}
          />
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
