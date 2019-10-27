import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/organisms/SearchBar";
import MovieBox from "../components/organisms/MovieBox";
import ErrorMessageBox from "../components/organisms/ErrorMessageBox";
import Spinner from "../components/atoms/Spinner";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading);
  const errorMessage = useSelector((state: any) => state.errorMessage);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    }, 2000);
  }, []);

  return (
    <>
      <SearchBar />
      {loading && !errorMessage && <Spinner overlay />}
      {errorMessage ? <ErrorMessageBox /> : <MovieBox />}
    </>
  );
};

export default App;
