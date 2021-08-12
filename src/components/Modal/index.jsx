import React from "react";
import {
  ModalStyled,
  ModalDialogStyled,
  ModalHeaderStyled,
  ModalButtonStyled,
  ModalBodyStyled,
} from "./ModalElement";
import { IClose } from "../../icons";

const Modal = ({ openModal, closeModal, children }) => {
  return (
    <ModalStyled isOpen={openModal}>
      <ModalDialogStyled>
        <ModalHeaderStyled>
          <ModalButtonStyled type="button" onClick={closeModal}>
            <IClose />
          </ModalButtonStyled>
        </ModalHeaderStyled>
        <ModalBodyStyled>{children}</ModalBodyStyled>
      </ModalDialogStyled>
    </ModalStyled>
  );
};

export default Modal;
