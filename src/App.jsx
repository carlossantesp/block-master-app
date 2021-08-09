import React, { Fragment } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import movies from "./movies";

const App = () => {
  return (
    <Fragment>
      <Header title="Block Master" />
      <MovieList movies={movies} />
    </Fragment>
  );
};

export default App;
