import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import "./Form.scss";
import AutocompleteList from "../AutocompleteList";

const Form = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    handleSearch(searchValue);
    setSearchValue("");
  };

  const handleSearch = (phrase: string) => {
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
        console.log("genre error", err);
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: err.status
        });
      });
  };

  useEffect(() => {
    searchValue !== "" && handleSearch(searchValue);
  }, [searchValue]);

  return (
    <form className="search-bar__form" onSubmit={handleSubmit}>
      <Input onChange={setSearchValue} value={searchValue} />
      <Button />
      <AutocompleteList value={searchValue} />
    </form>
  );
};

export default Form;
