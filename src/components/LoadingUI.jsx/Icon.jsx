const Icon = ({ children }) => {
  return (
    <span className=" h-[1.75rem] w-[1.75rem] rounded-full bg-[#9CA3AF] flex items-center justify-center cursor-pointer hover:bg-[#bb86fc]">
      {children}
    </span>
  );
};

export default Icon;
