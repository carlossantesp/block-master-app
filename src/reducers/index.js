import { ADD_MOVIES, FIND_DETAIL, SEARCH_MOVIE, SET_FILTER } from "../actions";
import {
  getAllIds,
  getLeastValuedIds,
  getMostValuedIds,
  movieListAsMap,
} from "../normalize";

function filterByTitle(title, movies) {
  const list = [];
  movies.forEach((movie) => {
    if (movie.title.toLowerCase().includes(title.toLowerCase())) {
      list.push(movie.id);
    }
  });
  return list;
}

function findById(id, allIds) {
  const parseId = parseInt(id, 10);
  if (allIds.includes(parseId)) {
    return [parseId];
  }
  return allIds;
}

function searchMovie(query, list, allIds) {
  if (isNaN(query)) {
    return filterByTitle(query, list);
  }
  return findById(query, allIds);
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_MOVIES: {
      const movieList = movieListAsMap(payload, state.movieList);
      const all = getAllIds(payload, state.list.all);
      const mostValued = getMostValuedIds(payload, state.list.mostValued);
      const leastValued = getLeastValuedIds(payload, state.list.leastValued);
      return {
        ...state,
        movieList,
        list: {
          ...state.list,
          all,
          mostValued,
          leastValued,
        },
      };
    }

    case FIND_DETAIL:
      return {
        ...state,
        movieDetail: payload,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: payload.type,
        title: payload.title,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        filter: "search",
        query: payload.query,
        title: payload.title,
        list: {
          ...state.list,
          search: searchMovie(payload.query, state.movieList, state.list.all),
        },
      };
    default:
      return state;
  }
};

export default reducer;
