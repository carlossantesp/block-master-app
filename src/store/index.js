import { createStore } from "redux";
import reducer from "../reducers";
import {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
} from "../normalize";

// import api from "../api";

// const dataTrending = await api.trendingMovie();
// const moviesTrending = dataTrending.results;

const movies = [];
const moviesTrending = [];

const initialState = {
  movieList: movieListAsMap(movies),
  movieTrending: movieListAsMap(moviesTrending),
  movieDetail: null,
  filter: "all",
  title: "Todas las peliculas",
  list: {
    allTrending: getAllIds(moviesTrending),
    all: getAllIds(movies),
    mostValued: getMostValuedIds(movies),
    leastValued: getLeastValuedIds(movies),
  },
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
