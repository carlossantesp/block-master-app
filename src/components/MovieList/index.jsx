import React, { useState, useEffect, useRef } from "react";
import {
  MovieListStyled,
  MoviListTitleStyled,
  MovieListContainStyled,
} from "./MovieListElement";
import Wrapper from "../Wrapper";
import Movie from "../Movie";
// import NotFound from "../NotFound";
import Spinner from "../Spinner";
import { useSelector, useDispatch } from "react-redux";

import api from "../../api";
import { ADD_MOVIES } from "../../actions";

const MovieList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const movieListId = state.list[state.filter];
  const movieList = state.movieList;
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const getMoviesNextPage = async (nextPage) => {
    const { results } = await api.moviePage(nextPage);
    dispatch({
      type: ADD_MOVIES,
      payload: results,
    });
    setPage(page + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    getMoviesNextPage(page);
  }, []);

  // const getMoviesNexter = useRef(getMoviesNext);

  // const observer = useRef(
  //   new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         setIsVisible(true);
  //         getMoviesNexter.current();
  //       }
  //     },
  //     { threshold: 1 }
  //   )
  // );
  // const [element, setElement] = useState(null);

  // useEffect(() => {
  //   const currentElement = element;
  //   const currentObserver = observer.current;
  //   if (currentElement) {
  //     currentObserver.observe(currentElement);
  //   }
  //   return () => {
  //     if (currentElement) {
  //       currentObserver.unobserve(currentElement);
  //     }
  //   };
  // }, [element]);

  // useEffect(() => {
  //   getMoviesNexter.current = getMoviesNext;
  // }, [getMoviesNext]);

  return (
    <MovieListStyled>
      <Wrapper>
        {/* {movieListId.length === 0 ? (
          <NotFound />
        ) : (
          <> */}

        <MoviListTitleStyled>{state.title}</MoviListTitleStyled>
        <MovieListContainStyled>
          {movieListId.map((id) => (
            <Movie key={id} movie={movieList.get(id)} />
          ))}
        </MovieListContainStyled>
        {/* {isVisible && (
              <div ref={setElement}>
                <Spinner />
              </div>
            )} */}
        {/* </>
        )} */}
        {isLoading && <Spinner />}
        <div>
          <button onClick={() => getMoviesNextPage(page)}>
            Cargar más peliculas {page}
          </button>
        </div>
      </Wrapper>
    </MovieListStyled>
  );
};

export default MovieList;
