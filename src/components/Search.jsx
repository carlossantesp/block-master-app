import React from "react";
import styled from "styled-components";
import { IBack } from "../icons";
import Form from "./Form";

const SearchStyled = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--bg-alt);
  display: flex;
  align-items: center;
  gap: var(--md);
  padding: 0 16px;
  height: var(--h-header);
  transform: ${({ isSearch }) => (isSearch ? "scale(1,1)" : "scale(0,1)")};
  transform-origin: right;
  transition: transform 0.25s ease;
  @media screen and (min-width: 992px) {
    transform: initial;
    display: none;
  }
  form {
    flex: 1;
  }
`;
const SearchIconStyled = styled.button`
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

const Search = ({ isSearch, setIsSearch }) => {
  return (
    <SearchStyled isSearch={isSearch}>
      <SearchIconStyled type="button" onClick={setIsSearch}>
        <IBack />
      </SearchIconStyled>
      <Form />
    </SearchStyled>
  );
};

export default Search;
