import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import {
  MovieWrapperStyled,
  MovieImageStyled,
  MovieVoteStyled,
  MovieInfoStyled,
  MovieTitleStyled,
  MovieDescStyled,
  MovieMoreStyled,
  MovieButtonsStyled,
} from "./MovieDetailElement";
import Button from "../Button";
import { IPlay, IPlus, IStar } from "../../icons";

const getDuration = (time) => {
  const hours = moment.duration(time, "minutes").hours();
  const minutes = moment.duration(time, "minutes").minutes();
  return `${hours}h ${minutes}m`;
};

const MovieDetail = () => {
  const movie = useSelector((state) => state.movieDetail);
  if (movie !== null) {
    const {
      vote_average,
      overview,
      title,
      poster_path,
      release_date,
      genres,
      runtime,
    } = movie;
    return (
      <MovieWrapperStyled>
        <MovieImageStyled>
          <MovieVoteStyled vote={vote_average}>
            <IStar />
            {vote_average}
          </MovieVoteStyled>
          <img
            src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
            alt={title}
          />
        </MovieImageStyled>
        <MovieInfoStyled>
          <MovieTitleStyled>{title}</MovieTitleStyled>
          <MovieDescStyled>{overview}</MovieDescStyled>
          <MovieMoreStyled>
            <p>{moment(release_date).year()}</p>
            <p>
              {genres.map((element) => (
                <span className="list" key={element.id}>
                  {element.name}
                </span>
              ))}
            </p>
            <p>{getDuration(runtime)}</p>
          </MovieMoreStyled>
          <MovieButtonsStyled>
            <Button typeBtn="primary" isBlock={true}>
              <IPlay /> VER AHORA
            </Button>
            <Button typeBtn="secondary" isBlock={true}>
              <IPlus /> VER DESPUÉS
            </Button>
          </MovieButtonsStyled>
        </MovieInfoStyled>
      </MovieWrapperStyled>
    );
  } else {
    return null;
  }
};

export default MovieDetail;
