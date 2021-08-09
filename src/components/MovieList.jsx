import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import Movie from "./Movie";

const MovieListStyled = styled.main`
  margin-block-start: var(--h-header);
  padding-block-start: var(--section);
  padding-block-end: var(--section);
`;
const MoviListTitleStyled = styled.h1`
  font: var(--headline1);
  margin-block-end: 3rem;
`;
const MovieListContainStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--w-card), 1fr));
  row-gap: var(--gap-row);
  column-gap: var(--gap-col);
`;

const MovieList = ({ movies }) => {
  return (
    <MovieListStyled>
      <Wrapper>
        <MoviListTitleStyled>Todas las peliculas</MoviListTitleStyled>
        <MovieListContainStyled>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MovieListContainStyled>
      </Wrapper>
    </MovieListStyled>
  );
};

export default MovieList;
