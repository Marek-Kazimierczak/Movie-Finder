import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import "./Form.scss";
import AutocompleteList from "../AutocompleteList";

const Form = () => {
  const [searchValue, setSearchValue] = useState("");
  const movies = useSelector((state: any) => state.movieList);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    search(searchValue);
    resetInputValue();
  };

  const search = (phrase: string) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=818eba3007e856a7778f192db256eb97&language=en-US&query=${phrase}&page=1&include_adult=true`
    )
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: res.results
        });
      })
      .catch(err => {
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: err.status
        });
      });
  };

  useEffect(() => {
    searchValue !== "" && search(searchValue);
  }, [searchValue]);

  const resetInputValue = () => {
    setSearchValue("");
  };

  return (
    <form className="search-bar__form" onSubmit={handleSubmit}>
      <Input onChange={setSearchValue} value={searchValue} />
      <Button />
      <AutocompleteList />
    </form>
  );
};

export default Form;
