import React from "react";
import styled from "styled-components";
import { IMenu, ISearch } from "../icons";

const IconButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  display: inline-block;
  color: var(--primary);
  line-height: 0;
  width: var(--w-icon);
  height: var(--w-icon);
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

const Icons = ({ setIsOpen, setIsSearch }) => {
  return (
    <>
      <IconButtonStyled type="button" onClick={setIsSearch}>
        <ISearch />
      </IconButtonStyled>
      <IconButtonStyled type="button" onClick={setIsOpen}>
        <IMenu />
      </IconButtonStyled>
    </>
  );
};

export default Icons;
