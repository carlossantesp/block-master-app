import React from "react";
import styled from "styled-components";
import { IStar } from "../icons";

const MovieStyled = styled.article`
  position: relative;
  min-inline-size: var(--w-card);
  border-radius: var(--sm);
  overflow: hidden;
  cursor: pointer;
`;
const MovieVoteStyled = styled.p`
  font: var(--body2-bold);
  display: flex;
  align-items: center;
  position: absolute;
  top: var(--top-card);
  left: 0;
  background-color: rgba(167, 169, 190, 0.84);
  border: 3px solid #0e3fa9;
  border-left: none;
  border-color: ${({ vote }) => vote >= 7 && "var(--primary)"};
  border-radius: 0 var(--xxlg) var(--xxlg) 0;
  padding: 0.375rem 0.625rem;
  svg {
    width: var(--md);
    height: var(--md);
    margin-inline-end: 0.125rem;
  }
  @media screen and (min-width: 768px) {
    font: var(--headline4);
    padding: var(--xs) var(--md);
    svg {
      width: var(--lg);
      height: var(--lg);
      margin-inline-end: var(--sm);
    }
  }
`;
const MovieImageStyled = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const Movie = ({ movie }) => {
  const { poster_path, title, vote_average } = movie;
  return (
    <MovieStyled>
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
