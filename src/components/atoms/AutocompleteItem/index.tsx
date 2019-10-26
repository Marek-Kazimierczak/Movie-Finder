import React from "react";
import "./AutocompleteItem.scss";

interface Props {
  text: string;
}

const AutocompleteItem = (props: Props) => {
  return <li className="search-bar__autocomplete-item">{props.text}</li>;
};

export default AutocompleteItem;
