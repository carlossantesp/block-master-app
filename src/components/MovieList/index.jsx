import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MovieListStyled,
  MoviListTitleStyled,
  MovieListContainStyled,
} from "./MovieListElement";
import Wrapper from "../Wrapper";
import Movie from "../Movie";
import NotFound from "../NotFound";
import Spinner from "../Spinner";

import { ADD_MOVIES } from "../../actions";
import api from "../../api";

const MovieList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const movieListId = state.list[state.filter];
  const movieList = state.movieList;
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [element, setElement] = useState(null);

  const getMoviesNextPage = async () => {
    const { results } = await api.moviePage(page);
    dispatch({
      type: ADD_MOVIES,
      payload: results,
    });
    setPage(page + 1);
    setIsLoading(false);
  };

  const getMoviesNextRef = useRef(getMoviesNextPage);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoading(true);
          getMoviesNextRef.current();
        }
      },
      { threshold: 1 }
    )
  );

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
    getMoviesNextRef.current = getMoviesNextPage;
  }, [getMoviesNextPage]);

  return (
    <MovieListStyled>
      <Wrapper>
        {state.filter === "search" && movieListId.length === 0 ? (
          <NotFound />
        ) : (
          <>
            <MoviListTitleStyled>{state.title}</MoviListTitleStyled>
            <MovieListContainStyled>
              {movieListId.map((id, index) => (
                <Movie key={index} movie={movieList.get(id)} />
              ))}
            </MovieListContainStyled>
            {isLoading && <Spinner />}
            {state.filter !== "search" && <div ref={setElement}></div>}
          </>
        )}
      </Wrapper>
    </MovieListStyled>
  );
};

export default MovieList;
