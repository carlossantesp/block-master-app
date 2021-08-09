import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  text-align: center;
  width: ${({ isBlock }) => (isBlock ? "100%" : "initial")};
  display: ${({ isBlock }) => (isBlock ? "block" : "inline-block")};
  font: var(--button);
  border: ${({ isLink }) => (isLink ? "none" : "1px solid var(--primary)")};
  cursor: pointer;
  background-color: ${({ isLink }) => isLink && "transparent !important"};
  background-color: ${({ typeBtn }) =>
    typeBtn === "primary" ? "var(--primary)" : "var(--black)"};
  color: ${({ isLink }) => isLink && "var(--white) !important"};
  color: ${({ typeBtn }) =>
    typeBtn === "primary" ? "var(--black)" : "var(--primary)"};
  padding: ${({ isLink }) => !isLink && "var(--p-button)"};
  border-radius: var(--xs);
  transition: all 0.35s ease;
  :hover,
  &.active {
    text-decoration: ${({ isLink }) => isLink && "underline"};
    color: ${({ isLink }) => isLink && "var(--primary) !important"};
    background-color: ${({ typeBtn }) =>
      typeBtn === "primary" ? "var(--primary-hover)" : "var(--black-hover)"};
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Button = ({
  children,
  typeBtn = "primary",
  isBlock = false,
  isLink = false,
  isActive = false,
}) => {
  return (
    <ButtonStyled
      type="button"
      isLink={isLink}
      typeBtn={typeBtn}
      isBlock={isBlock}
      className={isActive && "active"}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
