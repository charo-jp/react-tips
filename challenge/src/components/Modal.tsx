import { useRef } from "react";
import { createPortal } from "react-dom";

type ModalProp = {
  open: () => void;
}

const Modal = ({open} : ModalProp) => {
  const dialog = useRef<HTMLDialogElement>(null);


  // ! is a non-null assertion operator. 
  // it tells TypeScript compiler that this expression will not be null.
  // so do not need to give a warning!!
  return createPortal(<dialog ref = {dialog}>
    
  </dialog>, document.getElementById("modal-root")!);
};

export default Modal;