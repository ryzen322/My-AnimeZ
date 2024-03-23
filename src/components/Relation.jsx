import { LoadingInfo } from "./LoadingUI.jsx/LoadingHeading";
import WatchCards from "./Watch/WatchCards";
const Relation = ({ loading, data = {} }) => {
  if (loading) {
    return <LoadingInfo />;
  }

  return (
    <div className=" mt-7">
      <article>
        <h1 className=" font-bold text-[20px] mb-5">Relation</h1>

        <ul className=" flex gap-3 overflow-x-auto no-scrollbar">
          {data.relations.map((item) => (
            <WatchCards key={item.id} item={item} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Relation;
