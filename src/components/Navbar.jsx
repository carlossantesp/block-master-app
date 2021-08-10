import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { SET_FILTER } from "../actions";

const NavStyled = styled.nav`
  transform: ${({ isOpen }) => (isOpen ? "scale(1,1)" : "scale(0,1)")};
  transform-origin: right;
  transition: transform 0.25s ease;
  position: fixed;
  top: var(--h-header);
  right: 0;
  height: var(--h-full);
  width: 70%;
  background-color: var(--bg-alt);
  padding-inline-end: var(--gap-header);
  padding-inline-start: var(--gap-header);
  padding-block-start: 3rem;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    position: initial;
    inset: initial;
    width: initial;
    height: initial;
    background-color: transparent;
    padding-block-start: 0;
    transform: initial;
    padding-inline-end: 0;
    padding-inline-start: 0;
  }
`;
const FiltersStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--gap-header);
  text-align: center;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
const FilterItemStyled = styled.li`
  width: 100%;
  button {
    width: inherit;
  }
  @media screen and (min-width: 992px) {
    width: initial;
  }
`;

const Navbar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const changeTitle = (filter) => {
    switch (filter) {
      case "all":
        return "Todas las peliculas";
      case "mostValued":
        return "Peliculas más valoradas";
      case "leastValued":
        return "Peliculas menos valoradas";

      default:
        return "Todas las peliculas";
    }
  };

  const handleFilter = (filter) => {
    dispatch({
      type: SET_FILTER,
      payload: {
        type: filter,
        title: changeTitle(filter),
      },
    });
    setIsOpen(false);
  };
  return (
    <NavStyled isOpen={isOpen}>
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
