import { createStore } from "redux";
import reducer from "../reducers";
import {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
} from "../normalize";

import api from "../api";

const getMovies = async () => {
  const { results } = await api.moviePage(1);
  return results;
};
const movies = await getMovies();

const initialState = {
  movieList: movieListAsMap(movies),
  filter: "all",
  title: "Todas las peliculas",
  notFound: "",
  list: {
    all: getAllIds(movies),
    mostValued: getMostValuedIds(movies),
    leastValued: getLeastValuedIds(movies),
  },
};

const store = createStore(
  reducer,
  initialState
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
