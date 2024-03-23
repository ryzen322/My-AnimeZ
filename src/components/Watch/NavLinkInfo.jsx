const NavLinkInfo = ({
  children,
  className,
  activeFunc,
  text,
  activeElement,
}) => {
  function clicked() {
    activeFunc(text);
  }

  return (
    <button
      className={` py-1 px-3 border-b-[2px]  hover:border-[#cccc] hover:text-white transition-all duration-200 text-lg font-medium ${
        activeElement
          ? `text-white border-[#cccc]`
          : ` text-[#cccc] border-[#cccc]/35`
      }  ${className}`}
      onClick={clicked}
    >
      {text}
    </button>
  );
};

export default NavLinkInfo;
