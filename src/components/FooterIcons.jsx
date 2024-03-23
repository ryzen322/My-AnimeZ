import Icon from "./LoadingUI.jsx/Icon";
import {
  FaFacebookF,
  FaInstagram,
  FaReddit,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterIcons = () => {
  return (
    <div className=" flex items-center flex-wrap justify-center gap-5 px-5">
      <Icon>
        <FaFacebookF />
      </Icon>
      <Icon>
        <FaTwitter />
      </Icon>
      <Icon>
        <FaInstagram />
      </Icon>
      <Icon>
        <FaYoutube />
      </Icon>
      <Icon>
        <FaTwitch />
      </Icon>
      <Icon>
        <FaReddit />
      </Icon>
      <Icon>
        <FaTiktok />
      </Icon>
    </div>
  );
};

export default FooterIcons;
