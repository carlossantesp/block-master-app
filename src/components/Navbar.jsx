import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { SET_FILTER } from "../actions";

const NavStyled = styled.nav`
  display: none;
  margin-inline-end: var(--gap-header);
  margin-inline-start: var(--gap-header);
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;
const FiltersStyled = styled.ul`
  list-style: none;
  display: flex;
  gap: var(--gap-header);
`;
const FilterItemStyled = styled.li``;

const Navbar = () => {
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch({
      type: SET_FILTER,
      payload: filter,
    });
  };
  return (
    <NavStyled>
      <FiltersStyled>
        <FilterItemStyled>
          <Button isLink={true} onClick={() => handleFilter("all")}>
            Todos
          </Button>
        </FilterItemStyled>
        <FilterItemStyled>
          <Button isLink={true} onClick={() => handleFilter("mostValued")}>
            Más valorados
          </Button>
        </FilterItemStyled>
        <FilterItemStyled>
          <Button isLink={true} onClick={() => handleFilter("leastValued")}>
            Menos valorados
          </Button>
        </FilterItemStyled>
      </FiltersStyled>
    </NavStyled>
  );
};

export default Navbar;
