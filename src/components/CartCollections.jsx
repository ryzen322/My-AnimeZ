import CardCollectionList from "./CardCollectionList";
import LoadingCard from "./LoadingUI.jsx/LoadingCard";

const loadingState = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const CartCollections = ({ category, title, list = [], isLoading }) => {
  let context;

  if (isLoading) {
    context = loadingState.map((item) => <LoadingCard key={item.id} />);
  } else {
    context = list.map((item) => (
      <CardCollectionList
        key={item.id}
        img={item.image}
        title={item.title.english}
        thumbnail={item.trailer.thumbnail}
      />
    ));
  }

  return (
    <div className=" bg-[#212121]  rounded-md flex flex-col   font-Roboto text-white relative overflow-hidden">
      <header className=" flex flex-col items-center text-lg mt-5">
        <h1>{category}</h1>
        <h2>{title}</h2>
      </header>

      <div className=" w-full h-auto flex justify-center gap-3 px-3 py-3 lg:gap-1 lg:px-2 2xl:gap-3">
        {context}
      </div>
    </div>
  );
};

export default CartCollections;
