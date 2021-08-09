import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import Movie from "./Movie";
import api from "../api";
import { ADD_MOVIES } from "../actions";
import { useSelector, useDispatch } from "react-redux";

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

const MovieList = () => {
  const state = useSelector((state) => state);
  const movieListId = state.list[state.filter];
  const movieList = state.movieList;
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  const getMoviesNext = async () => {
    const { results } = await api.moviePage(page);
    dispatch({
      type: ADD_MOVIES,
      payload: results,
    });
    setPage(page + 1);
  };

  const getMoviesNexter = useRef(getMoviesNext);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          getMoviesNexter.current();
        }
      },
      { threshold: 1 }
    )
  );
  const [element, setElement] = useState(null);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  useEffect(() => {
    getMoviesNexter.current = getMoviesNext;
  }, [getMoviesNext]);

  return (
    <MovieListStyled>
      <Wrapper>
        <MoviListTitleStyled>Todas las peliculas</MoviListTitleStyled>
        <MovieListContainStyled>
          {movieListId.map((id) => (
            <Movie key={id} movie={movieList.get(id)} />
          ))}
        </MovieListContainStyled>
        <div ref={setElement}></div>
      </Wrapper>
    </MovieListStyled>
  );
};

export default MovieList;
