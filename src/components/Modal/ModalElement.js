import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  block-size: 100vh;
  background-color: rgba(15, 14, 23, 0.93);
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  overflow-y: scroll;
`;

export const ModalDialogStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--md);
  width: 100%;
  max-inline-size: 1200px;
  block-size: inherit;
  overflow-y: inherit;
  margin: 0 auto;
  padding: var(--md);
  @media screen and (min-width: 768px) {
    margin-block-start: 5rem;
  }
  @media screen and (min-width: 992px) {
    margin-block-start: 8rem;
  }
`;

export const ModalHeaderStyled = styled.div`
  align-self: flex-end;
`;

export const ModalButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  width: var(--xlg);
  height: var(--xlg);
  line-height: 0;
  cursor: pointer;
  color: var(--white);
`;

export const ModalBodyStyled = styled.div`
  flex: 1;
`;
