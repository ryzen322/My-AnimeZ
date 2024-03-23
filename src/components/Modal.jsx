import { createPortal } from "react-dom";

const Modal = () => {
  return createPortal(
    <div className=" h-screen w-full bg-black/10 absolute z-40 flex items-center justify-center">
      <div className="h-[5rem] w-[5rem] bg-white"></div>
    </div>,
    document.querySelector("#portal")
  );
};

export default Modal;
