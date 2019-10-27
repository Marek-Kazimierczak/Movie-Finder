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
        loading: false,
        errorMessage: action.error
      };
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movieList: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
}
