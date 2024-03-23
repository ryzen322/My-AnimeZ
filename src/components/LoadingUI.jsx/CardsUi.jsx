const CardsUi = ({ children, className }) => {
  return (
    <div
      className={` min-w-[200px] h-[17rem] bg-stone-600 rounded-md cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default CardsUi;
