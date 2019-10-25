import React from "react";
import "./SearchBar.scss";

interface Props {
  children: React.ReactNode;
}

const SearchBar = (props: Props) => {
  return <header className="search-bar">{props.children}</header>;
};

export default SearchBar;
