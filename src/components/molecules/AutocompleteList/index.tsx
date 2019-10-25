import React from "react";
import AutocompleteItem from "../../atoms/AutocompleteItem";

interface Props {
  children?: React.ReactNode;
}

const AutocompleteList = (props: Props) => {
  return <ul className="search-bar__autocomplete-list">{props.children}</ul>;
};

export default AutocompleteList;
