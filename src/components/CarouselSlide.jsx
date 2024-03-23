import CardsUi from "./LoadingUI.jsx/CardsUi";
import { TbPlus } from "react-icons/tb";
import CartContext from "./CartContext";
import { useEffect, useRef, useState } from "react";

const CarouselSlide = ({ data = [], isloading, addMore }) => {
  const scrolling = useRef(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (scroll) {
      scrolling.current.scrollLeft = scrolling.current.scrollWidth;
    }
  }, [data, scroll]);

  function addMoreSlide() {
    setScroll(true);
    addMore();
  }

  return (
    <div
      ref={scrolling}
      className=" flex gap-3 scroll-smooth overflow-scroll no-scrollbar px-3 snap-proximity snap-x"
    >
      {data.map((item) => (
        <CardsUi
          key={item.id}
          className={"overflow-hidden relative snap-center "}
        >
          <CartContext item={item} />
        </CardsUi>
      ))}
      <div className="  h-[16.5rem] flex items-center justify-center ">
        <div className=" w-10 h-10 rounded-full bg-black/60 cursor-pointer hover:bg-black transition-all duration-200 text-white flex items-center justify-center">
          <TbPlus size={"25px"} onClick={addMoreSlide} />
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
