import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AutocompleteItem from "../../atoms/AutocompleteItem";

import "./AutocompleteList.scss";

const AutocompleteList = () => {
  const movies = useSelector((state: any) => state.movieList);
  const errorMessage = useSelector((state: any) => state.errorMessage);
  const dispatch = useDispatch();

  const suggestMovies =
    movies &&
    !errorMessage &&
    movies
      .map((movie: any, index: number) => (
        <AutocompleteItem
          onClick={() => {
            dispatch({
              type: "GET_MOVIE",
              payload: index
            });
          }}
          text={movie.original_title}
        />
      ))
      .slice(0, 5);

  return <ul className="search-bar__autocomplete-list">{suggestMovies}</ul>;
};

export default AutocompleteList;
