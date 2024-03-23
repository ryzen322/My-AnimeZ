import { Link } from "react-router-dom";

const Links = ({ children }) => {
  return (
    <Link className=" text-normal font-semibold flex justify-center items-center rounded-md py-3 px-4 w-[8rem]  hover:bg-[#b1aaaacc] transition-all duration-200 ">
      {children}
    </Link>
  );
};

export default Links;
