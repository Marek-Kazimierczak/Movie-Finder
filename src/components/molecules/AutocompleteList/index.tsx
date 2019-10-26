import React from "react";
import AutocompleteItem from "../../atoms/AutocompleteItem";

import "./AutocompleteList.scss";

interface Props {
  // children?: React.ReactNode;
}

const AutocompleteList = (props: Props) => {
  return (
    <ul className="search-bar__autocomplete-list">
      {/* <AutocompleteItem text="Avatar" />
      <AutocompleteItem text="Avatar" />
      <AutocompleteItem text="Avatar" />
      <AutocompleteItem text="Avatar" />
      <AutocompleteItem text="Avatar" /> */}
    </ul>
  );
};

export default AutocompleteList;
