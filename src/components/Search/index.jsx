import React from "react";
import { SearchStyled, SearchIconStyled } from "./SearchElement";
import { IBack } from "../../icons";
import Form from "../Form";

const Search = ({ isOpen, searchToggle }) => {
  return (
    <SearchStyled isOpen={isOpen}>
      <SearchIconStyled type="button" onClick={searchToggle}>
        <IBack />
      </SearchIconStyled>
      <Form />
    </SearchStyled>
  );
};

export default Search;
