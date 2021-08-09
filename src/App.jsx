import React, { Fragment } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <Fragment>
      <Header title="Block Master" />
      <MovieList />
    </Fragment>
  );
};

export default App;
