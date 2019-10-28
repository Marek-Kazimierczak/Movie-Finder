import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import "./Form.scss";
import AutocompleteList from "../AutocompleteList";

const Form = () => {
  const [searchValue, setSearchValue] = useState("");
  const movieList = useSelector((state: any) => state.movieList);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    resetInputValue();
    handleSearch(searchValue);
    movieList &&
      dispatch({
        type: "GET_ACTIVE_MOVIE",
        payload: 0
      });
  };

  const resetInputValue = () => {
    setSearchValue("");
  };

  const handleSearch = useCallback(
    (phrase: string) => {
      dispatch({
        type: "SEARCH_MOVIES_REQUEST"
      });

      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=818eba3007e856a7778f192db256eb97&language=en-US&query=${phrase}&page=1&include_adult=true`
      )
        .then(res => res.json())
        .then(res => {
          if (!res.errors) {
            dispatch({
              type: "SEARCH_MOVIES_SUCCESS",
              payload: res.results
            });
          } else {
            dispatch({
              type: "SEARCH_MOVIES_FAILURE",
              error: res.errors[0]
            });
          }
        })
        .catch(err => {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: err
          });
        });
    },
    [dispatch]
  );

  useEffect(() => {
    searchValue !== "" && handleSearch(searchValue);
  }, [searchValue, handleSearch]);

  return (
    <form className="search-bar__form" onSubmit={handleSubmit}>
      <Input onChange={setSearchValue} value={searchValue} />
      <Button />
      <AutocompleteList resetInput={resetInputValue} value={searchValue} />
    </form>
  );
};

export default Form;
