import React from "react";
import "./AutocompleteItem.scss";

interface Props {
  text: string;
  onClick: () => void;
}

const AutocompleteItem = (props: Props) => {
  return (
    <li className="search-bar__autocomplete-item" onClick={props.onClick}>
      {props.text}
    </li>
  );
};

export default AutocompleteItem;
