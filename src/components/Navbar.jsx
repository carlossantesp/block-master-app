import React from "react";
import styled from "styled-components";
import Button from "./Button";

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
  return (
    <NavStyled>
      <FiltersStyled>
        <FilterItemStyled>
          <Button isLink={true}>Todos</Button>
        </FilterItemStyled>
        <FilterItemStyled>
          <Button isLink={true}>Más valorados</Button>
        </FilterItemStyled>
        <FilterItemStyled>
          <Button isLink={true}>Menos valorados</Button>
        </FilterItemStyled>
      </FiltersStyled>
    </NavStyled>
  );
};

export default Navbar;
