import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AutocompleteItem from "../../atoms/AutocompleteItem";

import "./AutocompleteList.scss";

interface Props {
  value: string;
}

const AutocompleteList = (props: Props) => {
  const movies = useSelector((state: any) => state.movieList);
  const errorMessage = useSelector((state: any) => state.errorMessage);
  const dispatch = useDispatch();

  const suggestMovies =
    movies &&
    !errorMessage &&
    props.value !== "" &&
    movies
      .map((movie: any, index: number) => (
        <AutocompleteItem
          key={index}
          text={movie.original_title}
          onClick={() => {
            dispatch({
              type: "GET_ACTIVE_MOVIE",
              payload: index
            });
          }}
        />
      ))
      .slice(0, 5);

  return <ul className="search-bar__autocomplete-list">{suggestMovies}</ul>;
};

export default AutocompleteList;
