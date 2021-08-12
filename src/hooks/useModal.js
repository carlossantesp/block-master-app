import { useState } from "react";

const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "initial";
    setIsOpen(false);
  };

  return [isOpen, openModal, closeModal];
};

export default useModal;
