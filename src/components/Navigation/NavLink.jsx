import { Link } from "react-router-dom";

const NavLink = ({ path, title }) => {
  return (
    <li className=" hover:text-gray-500 transition-all duration-200 cursor-pointer">
      <Link to={`${path}`}>{title}</Link>
    </li>
  );
};

export default NavLink;
