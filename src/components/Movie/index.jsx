import React from "react";
import { MovieStyled, MovieVoteStyled, MovieImageStyled } from "./MovieElement";
import { IStar } from "../../icons";

const Movie = ({ movie, ...otherProps }) => {
  const { poster_path, title, vote_average } = movie;
  return (
    <MovieStyled {...otherProps}>
      <MovieVoteStyled vote={vote_average}>
        <IStar />
        {vote_average}
      </MovieVoteStyled>
      <MovieImageStyled
        src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
        alt={title}
      />
    </MovieStyled>
  );
};

export default Movie;
