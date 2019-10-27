export const initialState = {
  loading: true,
  movieList: [],
  errorMessage: null,
  genres: null,
  activeMovie: null
};

export default function(state: any = initialState, action: any) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      };
    case "GET_ACTIVE_MOVIE":
      return {
        ...state,
        activeMovie: state.movieList[action.payload],
        loading: true,
        movieList: null
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: [...action.payload]
      };
    case "GET_GENRES_FAILURE":
      return {
        ...state,
        errorMessage: action.error
      };
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        movieList: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        activeMovie: null,
        errorMessage: action.error
      };
    default:
      return state;
  }
}
