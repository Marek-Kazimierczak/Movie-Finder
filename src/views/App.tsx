import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/organisms/SearchBar";
import MovieBox from "../components/organisms/MovieBox";
import MessageBox from "../components/organisms/MessageBox";
import Spinner from "../components/atoms/Spinner";

const GENRES_API_URL =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=818eba3007e856a7778f192db256eb97&language=en-US";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading);
  const errorMessage = useSelector((state: any) => state.errorMessage);
  const movie = useSelector((state: any) => state.activeMovie);

  useEffect(() => {
    fetch(GENRES_API_URL)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "GET_GENRES",
          payload: res.genres
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_GENRES_FAILURE",
          error: err.status
        });
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    }, 2000);
  }, []);

  return (
    <>
      <SearchBar />
      {loading && !errorMessage && <Spinner overlay />}
      {(errorMessage && !movie) || (!errorMessage && !movie) ? (
        <MessageBox />
      ) : (
        <MovieBox />
      )}
    </>
  );
};

export default App;
