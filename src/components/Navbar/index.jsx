import React, { useState } from "react";
import { NavStyled, FiltersStyled, FilterItemStyled } from "./NavBarElement";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { SET_FILTER } from "../../actions";

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

const Navbar = ({ isOpen, menuToggle }) => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch({
      type: SET_FILTER,
      payload: {
        type: filter,
        title: changeTitle(filter),
      },
    });
    setFilter(filter);
    menuToggle();
  };
  return (
    <NavStyled isOpen={isOpen}>
      <FiltersStyled>
        <FilterItemStyled>
          <Button
            isActive={filter === "all"}
            isLink={true}
            onClick={() => handleFilter("all")}
          >
            Todos
          </Button>
        </FilterItemStyled>
        <FilterItemStyled>
          <Button
            isActive={filter === "mostValued"}
            isLink={true}
            onClick={() => handleFilter("mostValued")}
          >
            Más valorados
          </Button>
        </FilterItemStyled>
        <FilterItemStyled>
          <Button
            isActive={filter === "leastValued"}
            isLink={true}
            onClick={() => handleFilter("leastValued")}
          >
            Menos valorados
          </Button>
        </FilterItemStyled>
      </FiltersStyled>
    </NavStyled>
  );
};

export default Navbar;
