import React, { Fragment } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import logo from "../images/logo.svg";

const App = () => {
  return (
    <Fragment>
      <Header logo={logo} title="Block Master" />
      <MovieList />
    </Fragment>
  );
};

export default App;
