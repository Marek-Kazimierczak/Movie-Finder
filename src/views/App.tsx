import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/organisms/SearchBar";
import MovieBox from "../components/organisms/MovieBox";
import Spinner from "../components/atoms/Spinner";

const GENRES_API_URL =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=818eba3007e856a7778f192db256eb97&language=en-US";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading);
  const errorMessage = useSelector((state: any) => state.errorMessage);

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
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    }, 2000);
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      {loading && !errorMessage && <Spinner overlay />}
      <MovieBox />
    </>
  );
};

export default App;
